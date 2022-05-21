import "./MintButton.sass";
import { useEffect, useState } from "react";
import MPOAbi from "../ABIs/MPO";

const MintButton = ({ price, to, text, setMintStatus }) => {
  // const MPOAddress = "0x9043343c9805824E4aC7Da587C846abc88FB72ED";
  // const [web3, setWeb3] = useState();
  // const [MPOContract, setMPOContract] = useState();
  // const [timeoutId, setTimeoutId] = useState();

  // console.log(price, to, text);

  // useEffect(() => {
  //   const _web3 = new Web3(window.ethereum);
  //   setWeb3(_web3);
  //   const _MPOContract = new _web3.eth.Contract(MPOAbi, MPOAddress);
  //   setMPOContract(_MPOContract);
  // }, [window.ethereum]);

  // function getTransactionReceiptMined(txHash, interval) {
  //   const transactionReceiptAsync = function (resolve, reject) {
  //     web3.eth.getTransactionReceipt(txHash, (error, receipt) => {
  //       if (error) {
  //         reject(error);
  //       } else if (receipt == null) {
  //         setTimeout(
  //           () => transactionReceiptAsync(resolve, reject),
  //           interval ? interval : 500
  //         );
  //       } else {
  //         resolve(receipt);
  //       }
  //     });
  //   };
  //   return new Promise(transactionReceiptAsync);
  // }

  // const mint = () => {
  //   const id = Math.ceil(Math.random() * (2 ** 53 - 1));
  //   console.log("hihihibye");
  //   const mint = MPOContract.methods.mint(id, to, text);
  //   console.log("yuhuhsduh");
  //   console.log("address, ", window.ethereum.selectedAddress);
  //   console.log("wei, ", web3.utils.toWei(price.toString(), "ether"));
  //   mint.estimateGas(
  //     {
  //       from: window.ethereum.selectedAddress,
  //       value: web3.utils.toWei(price.toString(), "ether"),
  //     },
  //     (err, tx) => {
  //       console.log("hihihihihi");
  //       if (err?.code === -32000) {
  //         // user rejected tx
  //         setMintStatus("Insufficient Funds");
  //         if (timeoutId) clearTimeout(timeoutId);
  //         setTimeoutId(setTimeout(() => setMintStatus(""), 5000));
  //       }
  //     }
  //   );
  //   //   MPOContract.methods
  //   //     .mint(id, to, text)
  //   //     .estimateGas(
  //   //       {
  //   //         from: window.ethereum.selectedAddress,
  //   //         value: web3.utils.toWei(price.toString(), "ether"),
  //   //       },
  //   //       (err, tx) => {
  //   //         console.log("hihihihihi");
  //   //         if (err?.code === -32000) {
  //   //           // user rejected tx
  //   //           setMintStatus("Insufficient Funds");
  //   //           if (timeoutId) clearTimeout(timeoutId);
  //   //           setTimeoutId(setTimeout(() => setMintStatus(""), 5000));
  //   //         }
  //   //       }
  //   //     )
  //   //     .then((gas) => {
  //   //       setMintStatus("Processing");
  //   //       MPOContract.methods.mint(id, to, text).send(
  //   //         {
  //   //           from: window.ethereum.selectedAddress,
  //   //           value: web3.utils.toWei(price.toString(), "ether"),
  //   //           gas: gas,
  //   //         },
  //   //         (err, tx) => {
  //   //           console.log(err);
  //   //           if (err?.code === 4001) {
  //   //             // user rejected tx
  //   //             setMintStatus("Rejected");
  //   //             if (timeoutId) clearTimeout(timeoutId);
  //   //             setTimeout(() => setMintStatus(""), 5000);
  //   //           } else {
  //   //             getTransactionReceiptMined(tx, 1000).then((receipt) => {
  //   //               setMintStatus("Sent");
  //   //               if (timeoutId) clearTimeout(timeoutId);
  //   //               setTimeout(() => setMintStatus(""), 10000);
  //   //             });
  //   //           }
  //   //         }
  //   //       );
  //   //     });
  // };

  return (
    <div className="MintButton">
      {/* {window.ethereum && <button onClick={mint}>TRANSMIT</button>} */}
    </div>
  );
};

export default MintButton;
