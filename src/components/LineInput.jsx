import "./LineInput.sass";

const LineInput = ({ value, setValue }) => {
  return (
    <div className="LineInput">
      <textarea
        type="textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        cols={33}
      />
      <div className="line-container">
        <div className="underline">{">"}</div>
        <div className="underline">{">"}</div>
        <div className="underline">{">"}</div>
        <div className="underline">{">"}</div>
      </div>
    </div>
  );
};

export default LineInput;
