import "./Input.sass";

const Input = ({ label, value }) => (
  <div className="Input">
    <label className="label">
      {label}
      <input type="text" className="input" value={value} />
    </label>
  </div>
);

export default Input;
