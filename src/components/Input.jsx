import "./Input.sass";

const Input = ({ label, value, setValue, placeholder, className }) => (
  <div className="Input">
    <label className="label">
      {label}
      <input
        type="text"
        className={`${className} input`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div style={{ position: "relative", display: "inline" }}>
        <div className="fade" />
      </div>
    </label>
  </div>
);

export default Input;
