import React, { useState } from "react";
import dataQuestions from "../questions.json";
import buttonNext from "../images/2 Btton_Siguiente.png";
import iconA from "../images/3 Btton_A.png";
import iconB from "../images/4 Btton_B.png";
import iconC from "../images/5 Btton_C.png";
import iconD from "../images/icono-07.png";

const Question = ({
  positionQuestion,
  onQuestionAnswer,
  answerSelected,
  setActiveQuestion,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const preguntaNumeroStyle = {
    fontSize: "40px",
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  // Function to insert a line break at specified keywords
  const formatQuestionText = (text, keyword) => {
    const [firstPart, secondPart] = text.split(keyword);
    return (
      <>
        {firstPart}
        {keyword}
        <br />
        {secondPart}
      </>
    );
  };

  // Define break keywords for specific questions
  const getBreakKeyword = (question) => {
    if (question.includes("nos")) return " nos ";
    if (question.includes("papá")) return " papá ";
    return null; // No keyword found, return null
  };

  return (
    <div className="questions-container2">
      <div className="question-title">
        <p style={preguntaNumeroStyle}>Prueba tus conocimientos</p>
        <p className="question-text" style={{ marginTop: '-5px' }}>
          {formatQuestionText(
            dataQuestions.results[positionQuestion].question,
            getBreakKeyword(dataQuestions.results[positionQuestion].question)
          )}
        </p>
      </div>
      <div className="buttons-questions-container">
        {dataQuestions.results[positionQuestion].answers.map(
          (questionText, index) => {
            if (index === answerSelected) {
              return (
                <div
                  className="question-button-selected"
                  key={`${index}-questions`}
                  id={index}
                  value={index}
                  onClick={(e) => {
                    console.log("Índice de la respuesta seleccionada:", index);
                    setActiveQuestion(e);
                  }}
                >
                  <p id={index} value={index}>
                    {questionText}
                  </p>
                </div>
              );
            }
            return (
              <div
                key={`${index}-questions`}
                id={index}
                className="button-question-container"
                onClick={(e) => {
                  console.log("Índice de la respuesta seleccionada:", index);
                  setActiveQuestion(e);
                  nextQuestion();
                }}
              >
                <p id={index} value={index}>
                  {questionText}
                </p>
              </div>
            );
          }
        )}
      </div>
      <div className="icons">
        <img src={iconA} alt="iconA" />
        <img src={iconB} alt="iconB" />
        <img src={iconC} alt="iconC" />
        <img src={iconD} alt="iconD" /> 
      </div>
      {answerSelected !== null && (
        <div
          onClick={() => {
            onQuestionAnswer(positionQuestion, answerSelected);
            nextQuestion();
          }}
          className="next-question"
        >
          <img src={buttonNext} alt="" width={175} height={50} />
        </div>
      )}
    </div>
  );
};

export default Question;
