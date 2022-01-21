import "./DetailsButton.sass";

const DetailsButton = ({ showDetails, setShowDetails }) => {
  return (
    <div className="DetailsButton">
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Send telegraph" : "What is this?"}
      </button>
    </div>
  );
};

export default DetailsButton;
