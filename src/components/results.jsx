import dataQuestions from "../questions.json";
import panoramaImage from "../images/panorama.png";
import heroFinish from "../images/hero-finish.png";
import mocionLogo from "../images/logo.png";
import congratsImage from "../images/congrats.png";
import retryImage from "../images/retry.png";

const Results = ({ correctAnswers, goToHome, answers }) => {
  return (
    <div className="questions-container">
      <img className="questions-img-panorama" src={panoramaImage} />
      <div className="logo-container-finish">
        <img src={mocionLogo} alt="" width="350" height={100} />
      </div>
      <div className="welcome-title-finish">
        <img
          src={
            correctAnswers === dataQuestions.results.length
              ? congratsImage
              : retryImage
          }
          alt=""
          width={600}
          height={220}
        />
        <p>Contestaste correctamente:</p>
      </div>
      <div className="buttons-questions-container">
        <div className="question-button-selected" onClick={goToHome}>
          <p className="finish-score">
            {correctAnswers}/{dataQuestions.results.length}
          </p>
        </div>
      </div>
      <p className="finish-text">
        <b>¡Gracias por participar!</b>
      </p>
      {/* <div className="complete-container">
        <img src={heroFinish} alt="" />
      </div> */}
    </div>
  );
  /* return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="flex flex-col justify-center items-center ">
          <div>You Scored</div>
          <div color="text.secondary">
            {correctAnswers}/{dataQuestions.results.length}
          </div>

          {dataQuestions.results.map((question, index) => {
            return (
              <div className="flex  self-start" key={index}>
                <div className="ml-5">{answers[index] ? "✅" : "❌"}</div>
                <div>
                  <div>{question.question}</div>
                </div>
              </div>
            );
          })}
          <button onClick={goToHome}>play again</button>
        </div>
      </div>
    </div>
  ); */
};

export default Results;
