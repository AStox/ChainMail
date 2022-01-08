import "./LineInput.sass";
import { useState } from "react";

const LineInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className="LineInput">
      <label className="label">
        {">"}
        <input
          type="text"
          onChange={(e) => setValue(setValue(e.target.value))}
        />
      </label>
    </div>
  );
};

export default LineInput;
