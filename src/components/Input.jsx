import "./Input.sass";

const Input = ({ label, value, setValue, placeholder }) => (
  <div className="Input">
    <label className="label">
      {label}
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  </div>
);

export default Input;
