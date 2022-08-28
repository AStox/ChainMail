// import "./Input.sass";

import InsetText from "./InsetText";

const Input = ({ label, labelWidth, value, setValue, placeholder, className, disabled }) => (
  <div className="Input">
    <div className="label underline">
      <InsetText height={25} width={labelWidth} text={label} />
      {/* <div className="underline"> */}
      <input
        type="text"
        className={`${className} input`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
      {/* </div> */}
    </div>
  </div>
);

export default Input;
