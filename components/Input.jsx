// import "./Input.sass";

import InsetText from "./InsetText";

const Input = ({ label, value, setValue, placeholder, className, long, disabled }) => (
  <div className={`Input ${long ? "long" : ""}`}>
    <div className="label">
      <InsetText height={25} width={110} right text={label} />
      <div className="underline">
        <input
          type="text"
          className={`${className} input`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
        />
      </div>
    </div>
  </div>
);

export default Input;
