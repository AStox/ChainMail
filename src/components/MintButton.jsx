import "./MintButton.sass";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import MPOAbi from "../ABIs/MPO";

const MintButton = ({ price, to, text, setMintStatus, sentConfirmation }) => {
  const MPOAddress = "0x3d7e5ee442051b6b4536ee09613cc913b4cfc943";
  const [provider, setProvider] = useState();
  const [MPOContract, setMPOContract] = useState();

  useEffect(() => {
    if (window.ethereum) {
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = _provider.getSigner();
      setProvider(_provider);
      const _MPOContract = new ethers.Contract(MPOAddress, MPOAbi, signer);
      setMPOContract(_MPOContract);
    }
  }, [window.ethereum]);

  // function getTransactionReceiptMined(txHash, interval) {
  //   const transactionReceiptAsync = function (resolve, reject) {
  //     provider.eth.getTransactionReceipt(txHash, (error, receipt) => {
  //       if (error) {
  //         reject(error);
  //       } else if (receipt == null) {
  //         setTimeout(() => transactionReceiptAsync(resolve, reject), interval ? interval : 500);
  //       } else {
  //         resolve(receipt);
  //       }
  //     });
  //   };
  //   return new Promise(transactionReceiptAsync);
  // }

  const mint = () => {
    const id = Math.ceil(Math.random() * (2 ** 53 - 1));
    setMintStatus("Thinking...");
    const mintTx = MPOContract.mint(id, to, text, {
      gasLimit: 52000 + 30 * text.length,
      value: ethers.utils.parseUnits(price.toString(), "ether"),
    });
    mintTx.then((res, err) => {
      if (!err) {
        console.log(res);
        setMintStatus("Transmitting...");
        res.wait().then((res) => {
          console.log(res);
          sentConfirmation();
        });
      } else {
        console.log(err);
      }
    });
    // {
    //   from: provider.listAccounts()[0],
    //   value: ethers.utils.parseUnits(price.toString(), "ether"),
    // },
    //   (err, tx) => {
    //     console.log("hihihihihi");
    //     if (err?.code === -32000) {
    //       // user rejected tx
    //       setMintStatus("Insufficient Funds");
    //       if (timeoutId) clearTimeout(timeoutId);
    //       setTimeoutId(setTimeout(() => setMintStatus(""), 5000));
    //     }
    //   }
    // );
    // .then((gas) => {
    //   setMintStatus("Processing");
    //   MPOContract.mint(id, to, text).send(
    //     {
    //       from: provider.listAccounts()[0],
    //       value: ethers.utils.parseUnits(price.toString(), "ether"),
    //       gas: gas,
    //     },
    //     (err, tx) => {
    //       console.log(err);
    //       if (err?.code === 4001) {
    //         // user rejected tx
    //         setMintStatus("Rejected");
    //         if (timeoutId) clearTimeout(timeoutId);
    //         setTimeout(() => setMintStatus(""), 5000);
    //       } else {
    //         getTransactionReceiptMined(tx, 1000).then((receipt) => {
    //           setMintStatus("Sent");
    //           if (timeoutId) clearTimeout(timeoutId);
    //           setTimeout(() => setMintStatus(""), 10000);
    //         });
    //       }
    //     }
    //   );
    // });
  };

  return (
    <div className="MintButton">{window.ethereum && <button onClick={mint}>TRANSMIT</button>}</div>
  );
};

export default MintButton;
