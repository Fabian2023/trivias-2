

const Welcome = ({ setShowWelcome }) => {
  const onBeginQuiz = () => {
    setShowWelcome(false);
  };
  return (
    <div className="questions-container">
      
      <div className="welcome-title">
        <h1>¡hola!</h1>
       

        <p>
          Bienvenidos a nuestra Trivia 
        </p>
        <p>
          de la inteligencia de mamá.
        </p>
        
      </div>
      <div className="buttons-questions-container">
        <div className="begin-button" onClick={onBeginQuiz}>
          <p>INICIO</p>
        </div>
        
      </div>
    </div>
  );
};

export default Welcome;
