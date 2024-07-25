const Welcome = ({ setShowWelcome }) => {
  const onBeginQuiz = () => {
    setShowWelcome(false);
  };
  return (
    <div className="questions-container">
      <div className="buttons-questions-container">
        <div className="begin-button" onClick={onBeginQuiz}></div>
      </div>
    </div>
  );
};

export default Welcome;
