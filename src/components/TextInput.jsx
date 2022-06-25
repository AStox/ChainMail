import "./TextInput.sass";

const TextInput = ({ value, setValue, setStatusWithTimeout }) => {
  const lineLength = 30;
  const maxLines = 4;

  function updateValue(eventValue) {
    setValue(eventValue);
  }

  return (
    <div className="TextInput">
      <textarea
        type="textarea"
        value={value}
        onChange={(e) => {
          updateValue(e.target.value);
          setStatusWithTimeout("");
        }}
        rows={maxLines}
        cols={lineLength}
        wrap="hard"
        maxLength={123}
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

export default TextInput;
