import "./MintButton.sass";
import { useEffect, useState } from "react";
import Web3 from "web3";
import MPOAbi from "../ABIs/MPO";

const MintButton = ({ price, to, line1, line2, line3, line4 }) => {
  const MPOAddress = "0x113d32584D5B95365669b3dd423f3A3e73aBf3eD";
  const [web3, setWeb3] = useState();
  const [MPOContract, setMPOContract] = useState();

  console.log(price, to, line1, line2, line3, line4);

  useEffect(() => {
    const _web3 = new Web3(window.ethereum);
    setWeb3(_web3);
    const _MPOContract = new _web3.eth.Contract(MPOAbi, MPOAddress);
    setMPOContract(_MPOContract);
  }, [window.ethereum]);

  const mint = () => {
    const id = Math.ceil(Math.random() * (2 ** 53 - 1));
    MPOContract.methods
      .mint(id, to, line1, line2, line3, line4)
      .estimateGas({
        from: window.ethereum.selectedAddress,
        value: web3.utils.toWei(price.toString(), "ether"),
      })
      .then((gas) =>
        MPOContract.methods.mint(id, to, line1, line2, line3, line4).send(
          {
            from: window.ethereum.selectedAddress,
            value: web3.utils.toWei(price.toString(), "ether"),
            gas: gas,
          },
          (txOrError) => {
            console.log(txOrError);
          }
        )
      );
  };

  return (
    <div className="MintButton">
      {window.ethereum && <button onClick={mint}>SEND</button>}
    </div>
  );
};

export default MintButton;
