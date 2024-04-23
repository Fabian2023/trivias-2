import dataQuestions from "../questions.json";
import buttonNext from "../images/2 Btton_Siguiente.png";
import iconA from "../images/3 Btton_A.png"
import iconB from "../images/4 Btton_B.png"
import iconC from "../images/5 Btton_C.png"

const Question = ({
  positionQuestion,
  onQuestionAnswer,
  answerSelected,
  setActiveQuestion,
}) => {
  const preguntaNumeroStyle = {
    fontSize: "20px",
  };
  return (
    <div className="questions-container2">
      <div className="question-title">
        <p style={preguntaNumeroStyle}>
          Pregunta # {dataQuestions.results[positionQuestion].number}
        </p>
        <p>{dataQuestions.results[positionQuestion].question}</p>
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
                  onClick={setActiveQuestion}
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
                onClick={setActiveQuestion}
              >
                <p id={index} value={index}>
                  {questionText}
                </p>
              </div>
            );
          }
        )}
      </div>
      {answerSelected !== null && (
        <div
          onClick={() => {
            onQuestionAnswer(positionQuestion, answerSelected);
            setActiveQuestion(null);
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
