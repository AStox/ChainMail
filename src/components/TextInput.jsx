import "./TextInput.sass";

const TextInput = ({ value, setValue, setStatusWithTimeout }) => {
  const lineLength = 30;
  const maxLines = 4;

  function updateValue(value) {
    const split = value.split("\n");
    if (split[split.length - 1].length > lineLength) {
      value += "\n";
    }
    let count = (value.match(/\n/g) || []).length;
    if (count <= maxLines - 1) {
      setValue(value);
    } else {
      setStatusWithTimeout("Text too long!");
    }
  }

  return (
    <div className="TextInput">
      <textarea
        type="textarea"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        rows={maxLines}
        cols={lineLength}
        maxLength={147}
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
