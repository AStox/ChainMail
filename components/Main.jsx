import React, { useState } from "react";
import Inbox from "./Inbox";
import RaisedText from "./RaisedText";
import TextInput from "./TextInput";
import SendButton from "./SendButton";
import Input from "./Input";

const Main = () => {
  const [text, setText] = useState("");
  const [to, setTo] = useState("");
  // const MPOAddress = "0x113d32584D5B95365669b3dd423f3A3e73aBf3eD";
  // let MPOContract;
  // let provider;

  // useEffect(() => {
  //   if (window?.ethereum) {
  //     provider = new ethers.providers.Web3Provider(window?.ethereum);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (window?.ethereum) {
  //     window?.ethereum.on("connect", () => {
  //       provider
  //         .listAccounts()
  //         .then((result) => {
  //           if (result.length > 0) {
  //             connectAccount();
  //           }
  //         })
  //         .catch((error) => console.log(error));
  //     });
  //     window?.ethereum.on("accountsChanged", (accounts) => {
  //       provider
  //         .listAccounts()
  //         .then((result) => {
  //           if (result.length > 0) {
  //             connectAccount();
  //           } else {
  //             setAddress("");
  //           }
  //         })
  //         .catch((error) => console.log(error));
  //     });
  //     window?.ethereum.on("disconnect", () => {
  //       setAddress("");
  //     });
  //   }
  // }, []);

  // async function getENS(address) {
  //   const ens = new ENS({
  //     provider: window.ethereum,
  //     ensAddress: getEnsAddress("1"),
  //   });
  //   const result = await ens.getName(address);
  //   return result.name;
  // }

  // async function getProvider() {
  //   if (provider) {
  //     console.log("Ethereum successfully detected!");
  //     connectAccount();
  //   } else {
  //     console.error("Please install MetaMask!");
  //     setStatus("NO WALLET PROVIDER DETECTED");
  //     // TODO: Set "No wallet provider detected" status here!
  //   }
  // }

  // async function connectAccount() {
  //   const ret = await provider.send("eth_requestAccounts", []);
  //   const account = ret.result ? ret.result[0] : ret[0];
  //   // setAddress((await getENS(account)) || account);
  // }

  return (
    // <div className="Main" suppressHydrationWarning>
    <div className="Main">
      {/* {!!!isTabletOrMobile && ( */}
      <div className="inbox-container">
        <div className="box-title">
          <RaisedText height={50} width={270} text={"IN BOX"} />
          <div className="box-subtitle">YOUR ACTIVE CONVERSATIONS</div>
        </div>
        <Inbox />
      </div>
      {/*  )} */}
      <div className="outbox-container">
        <div className="box-title">
          <RaisedText height={50} width={400} text={"OUT BOX"} />
          <div className="box-subtitle">START A NEW CONVERSATION OR RESPOND TO AN EXISTING ONE</div>
        </div>
        <div className="draft-container">
          <Input setValue={setTo} value={to} label="TO" labelWidth="50" placeholder="0x..." />
          <TextInput setValue={setText} value={text} />
          <SendButton price={0.001} to={to} text={text} />
        </div>
      </div>
    </div>
  );
};

export default Main;
