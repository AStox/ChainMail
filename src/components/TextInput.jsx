import { useEffect, useRef } from "react";
import "./TextInput.sass";

const TextInput = ({ value, setValue, setStatusWithTimeout }) => {
  const textarea = useRef(null);
  const lineLength = 30;
  const maxLines = 4;

  useEffect(() => {
    window.addEventListener("keyup", handleUserKeyPress);

    return () => {
      window.removeEventListener("keyup", handleUserKeyPress);
    };
  }, []);

  const handleUserKeyPress = () => {
    console.log(textarea.current.scrollTop);
    textarea.current.scrollTo(0, 0);
    textarea.current.scrollTop = 0;
  };

  // useEffect(() => {
  //   console.log();
  // }, [textarea.current.selectionStart]);

  function updateValue(eventValue) {
    setValue(eventValue);
  }

  return (
    <div className="TextInput">
      <textarea
        ref={textarea}
        type="textarea"
        value={value}
        onChange={(e) => {
          updateValue(e.target.value);
          setStatusWithTimeout("");
        }}
        rows={maxLines}
        cols={lineLength}
        wrap="hard"
        maxLength={121}
      />
      <div
        style={{
          position: "absolute",
          width: "95%",
          top: "-5px",
          left: "1vw",
          pointerEvents: "none",
        }}
      >
        <div className="line-container">
          <div className="underline">{">"}</div>
          <div className="underline">{">"}</div>
          <div className="underline">{">"}</div>
          <div className="underline">{">"}</div>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
