import "./LineInput.sass";

const LineInput = ({ value, setValue }) => {
  return (
    <div className="LineInput">
      <label className="label">
        {">"}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </div>
  );
};

export default LineInput;
