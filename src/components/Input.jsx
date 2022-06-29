import "./Input.sass";

const Input = ({ label, value, setValue, placeholder, className, long, disabled }) => (
  <div className={`Input ${long ? "long" : ""}`}>
    <div className="label">
      {label}
      <input
        type="text"
        className={`${className} input`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
      <div style={{ position: "relative", display: "inline" }}>
        <div className="fade" />
      </div>
    </div>
  </div>
);

export default Input;
