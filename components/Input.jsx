// import "./Input.sass";

import InsetText from "./InsetText";

const Input = ({ label, labelWidth, value, setValue, placeholder, className, disabled }) => (
  <div className="Input">
    <div className="label">
      <InsetText height={25} width={labelWidth} textAnchor="end" text={label} />
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
