import "./MintButton.sass";
import { useEffect, useState } from "react";
import Web3 from "web3";
import MPOAbi from "../ABIs/MPO";

const MintButton = ({
  price,
  to,
  line1,
  line2,
  line3,
  line4,
  setMintStatus,
}) => {
  const MPOAddress = "0x113d32584D5B95365669b3dd423f3A3e73aBf3eD";
  const [web3, setWeb3] = useState();
  const [MPOContract, setMPOContract] = useState();
  const [timeoutId, setTimeoutId] = useState();

  console.log(price, to, line1, line2, line3, line4);

  useEffect(() => {
    const _web3 = new Web3(window.ethereum);
    setWeb3(_web3);
    const _MPOContract = new _web3.eth.Contract(MPOAbi, MPOAddress);
    setMPOContract(_MPOContract);
  }, [window.ethereum]);

  function getTransactionReceiptMined(txHash, interval) {
    const transactionReceiptAsync = function (resolve, reject) {
      web3.eth.getTransactionReceipt(txHash, (error, receipt) => {
        if (error) {
          reject(error);
        } else if (receipt == null) {
          setTimeout(
            () => transactionReceiptAsync(resolve, reject),
            interval ? interval : 500
          );
        } else {
          resolve(receipt);
        }
      });
    };
    return new Promise(transactionReceiptAsync);
  }

  const mint = () => {
    const id = Math.ceil(Math.random() * (2 ** 53 - 1));
    MPOContract.methods
      .mint(id, to, line1, line2, line3, line4)
      .estimateGas(
        {
          from: window.ethereum.selectedAddress,
          value: web3.utils.toWei(price.toString(), "ether"),
        },
        (err, tx) => {
          if (err?.code === -32000) {
            // user rejected tx
            setMintStatus("Insufficient Funds");
            if (timeoutId) clearTimeout(timeoutId);
            setTimeoutId(setTimeout(() => setMintStatus(""), 5000));
          }
        }
      )
      .then((gas) => {
        setMintStatus("Processing");
        MPOContract.methods.mint(id, to, line1, line2, line3, line4).send(
          {
            from: window.ethereum.selectedAddress,
            value: web3.utils.toWei(price.toString(), "ether"),
            gas: gas,
          },
          (err, tx) => {
            console.log(err);
            if (err?.code === 4001) {
              // user rejected tx
              setMintStatus("Rejected");
              if (timeoutId) clearTimeout(timeoutId);
              setTimeout(() => setMintStatus(""), 5000);
            } else {
              getTransactionReceiptMined(tx, 1000).then((receipt) => {
                setMintStatus("Sent");
                if (timeoutId) clearTimeout(timeoutId);
                setTimeout(() => setMintStatus(""), 10000);
              });
            }
          }
        );
      });
  };

  return (
    <div className="MintButton">
      {window.ethereum && <button onClick={mint}>SEND</button>}
    </div>
  );
};

export default MintButton;
