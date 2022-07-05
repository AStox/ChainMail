import Input from "../Input";
import ConnectButton from "../buttons/ConnectButton";
import "./TopBar.sass";

const setStatusWithTimeout = () => {};

const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar-item cost">
      <Input label="Cost" value="0.001e" />
    </div>
    <div className="top-bar-item">
      <ConnectButton setStatus={setStatusWithTimeout} />
    </div>
  </div>
);

export default TopBar;
