// import "./Input.sass";

const Status = ({ label, value, setValue, placeholder, className, disabled }) => (
  <div className={`Input status`}>
    <div className="label">
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
);

export default Status;
