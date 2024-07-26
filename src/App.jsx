"use client";

import { useState, useEffect } from "react";

import Results from "./components/results";
import Questions from "./components/question";
import Welcome from "./components/welcome";
import dataQuestions from "./questions.json";

const Quiz = () => {
  let [showWelcome, setShowWelcome] = useState(true);
  let [positionQuestion, setPositionQuestion] = useState(0);
  let [correctAnswers, setCorrectAnswer] = useState(0);
  let [answers, setAnswers] = useState({});
  const [answerSelected, setAnswerSelected] = useState(1);
  const setActiveQuestion = (e) => {
    if (!e) {
      setAnswerSelected(null);
      return;
    }
    setAnswerSelected(parseInt(e.target.id));
  };

  const onQuestionAnswer = (prevPosition, answer) => {
    const positionQuestionPlusOne = prevPosition + 1;
    setPositionQuestion(positionQuestionPlusOne);
    checkQuestionAnswer(positionQuestionPlusOne, answer);
  };

  const checkQuestionAnswer = (position, answer) => {
    const isCorrectAnswer =
      dataQuestions.results[position - 1]?.correct_answer === answer;

    if (isCorrectAnswer) {
      const correctAnswerCounterPlusone = correctAnswers + 1;
      setCorrectAnswer(correctAnswerCounterPlusone);
    }
    saveQuestionAnswer(position, isCorrectAnswer);
  };

  const saveQuestionAnswer = (position, answer) => {
    setAnswers({ ...answers, [position - 1]: answer });
  };

  const resetCounters = () => {
    setCorrectAnswer(0);
    setPositionQuestion(0);
  };

  useEffect(() => {
    resetCounters();
  }, []);

  if (
    positionQuestion >= dataQuestions.results?.length &&
    positionQuestion > 0
  ) {
  }

  const goToHome = () => {
    setPositionQuestion(0);
    resetCounters();
  };

  if (showWelcome) {
    return <Welcome setShowWelcome={setShowWelcome} />;
  }

  if (positionQuestion >= 5) {
    return (
      <Results
        correctAnswers={correctAnswers}
        goToHome={goToHome}
        answers={answers}
        
      />
    );
  }

  if (dataQuestions.results?.length > 0 && positionQuestion < 5) {
    return (
      <Questions
        answerSelected={answerSelected}
        setActiveQuestion={setActiveQuestion}
        positionQuestion={positionQuestion}
        onQuestionAnswer={onQuestionAnswer}
      />
    );
  }
  return "error";
};

export default Quiz;
