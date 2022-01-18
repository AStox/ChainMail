import "./MintButton.sass";
import { useEffect, useState } from "react";
import Web3 from "web3";
import MPOAbi from "../ABIs/MPO";

const MintButton = () => {
  const MPOAddress = "0x113d32584D5B95365669b3dd423f3A3e73aBf3eD";
  const [web3, setWeb3] = useState();
  const [MPOContract, setMPOContract] = useState();

  useEffect(() => {
    const _web3 = new Web3(window.ethereum);
    setWeb3(_web3);
    console.log("dfgdf");
    const _MPOContract = new _web3.eth.Contract(MPOAbi, MPOAddress);
    setMPOContract(_MPOContract);
    console.log(_MPOContract.methods);
  }, [window.ethereum]);

  const mint = () => {
    MPOContract.methods
      .mint(
        2,
        "0x113d32584D5B95365669b3dd423f3A3e73aBf3eD",
        "Hello world",
        "",
        "",
        ""
      )
      .estimateGas({
        from: window.ethereum.selectedAddress,
        value: web3.utils.toWei("0.001", "ether"),
      })
      .then((gas) =>
        MPOContract.methods
          .mint(
            2,
            "0x113d32584D5B95365669b3dd423f3A3e73aBf3eD",
            "Hello world",
            "",
            "",
            ""
          )
          .send({
            from: window.ethereum.selectedAddress,
            value: web3.utils.toWei("0.001", "ether"),
            gas: gas,
          })
      );
  };

  return (
    <div className="MintButton">
      {window.ethereum && <button onClick={mint}>SEND</button>}
    </div>
  );
};

export default MintButton;
