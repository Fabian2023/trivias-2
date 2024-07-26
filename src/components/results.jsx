import React, { useState } from "react";
import Modal from "react-modal";
import dataQuestions from "../questions.json";
import ganaste from "../images/Recurso 1Te las sabes (1).png";
import perdiste from "../images/Recurso 3intenta mañana (4).png";

const Results = ({ correctAnswers, goToHome, answers }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
    window.location.reload();
  };

  const modalStyles = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      padding: "20px",
      border: "none",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.75)",
    },
  };

  const totalQuestions = 5
  const incorrectAnswers = totalQuestions - correctAnswers;

  return (
    <div className="questions-container3">
      <div className="logo-container-finish"></div>
      <div className="welcome-title-finish">
        {correctAnswers === totalQuestions ? (
          <h1 style={{ color: "transparent" }}>¡Felicidades!</h1>
        ) : (
          <h1 style={{ color: "transparent" }}>¡Puedes hacerlo mejor!</h1>
        )}
      </div>
      <div className="buttons-questions-containers">
        <div className="question-button-selected2s" onClick={goToHome}>
          <div className="finish-scores"></div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Resultados"
        style={modalStyles}
      >
        <div style={{ position: "relative", textAlign: "center" }}>
          {correctAnswers === totalQuestions ? (
            <img
              src={ganaste}
              alt="Ganaste"
              style={{ width: "80%", marginBottom: "20px" , marginTop:"90px" }}
            />
          ) : (
            <img
              src={perdiste}
              alt="Perdiste"
              style={{ width: "80%", marginBottom: "20px" }}
            />
          )}
          <p
            style={{
              position: "absolute",
              top: "37.6%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: correctAnswers === totalQuestions ? "transparent" : "white",
              fontWeight: "bold",
              marginTop: "0",
            }}
          >
            {incorrectAnswers}
          </p>

          <button
            onClick={closeModal}
            style={{ position: "absolute", left: "35%", marginTop: "85%", width: "150px",  background: "transparent",border: "none",
              height: "50px", }}
          >
           
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Results;
