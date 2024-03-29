import { useEffect, useRef } from "react";
import InsetText from "./InsetText";
// import "./TextInput.sass";

const TextInput = ({ value, setValue, setStatusWithTimeout }) => {
  const textarea = useRef(null);
  const lineLength = 30;
  const maxLines = 6;

  // useEffect(() => {
  //   if (typeof window == "undefined") {
  //     return;
  //   }
  //   window?.addEventListener("keyup", handleUserKeyPress);

  //   return () => {
  //     window?.removeEventListener("keyup", handleUserKeyPress);
  //   };
  // }, []);

  const handleUserKeyPress = () => {
    textarea.current.scrollTo(0, 0);
    textarea.current.scrollTop = 0;
  };

  function updateValue(eventValue) {
    setValue(eventValue);
  }

  return (
    <div className="TextInput">
      <InsetText height="25" width="150" text="MESSAGE" />
      <textarea
        ref={textarea}
        type="textarea"
        value={value}
        onChange={(e) => {
          updateValue(e.target.value);
        }}
        // rows={maxLines}
        // cols={lineLength}
        // wrap="hard"
        // maxLength={121}
      />
      {/* <div className="absolute-container">
        <div className="line-container">
          <div className="underline" />
          <div className="underline" />
          <div className="underline" />
          <div className="underline" />
          <div className="underline" />
          <div className="underline" />
        </div>
      </div> */}
    </div>
  );
};

export default TextInput;
