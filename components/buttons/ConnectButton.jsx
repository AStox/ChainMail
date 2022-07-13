import { useEffect, useState } from "react";
import Input from "../Input.jsx";
// import ENS, { getEnsAddress } from "@ensdomains/ensjs";
import { ethers } from "ethers";
// import MPOAbi from "../ABIs/MPO";
// import ENSAddress from '@ensdomains/react-ens-address'

// import "./ConnectButton.sass";

const ConnectButton = ({ setStatus }) => {
  const [address, setAddress] = useState("");
  // const MPOAddress = "0x113d32584D5B95365669b3dd423f3A3e73aBf3eD";
  // let MPOContract;
  let provider;

  useEffect(() => {
    if (window !== undefined) {
      if (window?.ethereum) {
        provider = new ethers.providers.Web3Provider(window?.ethereum);
      }
      // MPOContract = new provider.eth.Contract(MPOAbi, MPOAddress);
    }
  }, [window?.ethereum]);

  useEffect(() => {
    console.log(window);
    if (window !== undefined) {
      if (window.ethereum) {
        window?.ethereum.on("connect", () => {
          provider
            .listAccounts()
            .then((result) => {
              if (result.length > 0) {
                connectAccount();
              }
            })
            .catch((error) => console.log(error));
        });
        window?.ethereum.on("accountsChanged", (accounts) => {
          provider
            .listAccounts()
            .then((result) => {
              if (result.length > 0) {
                connectAccount();
              } else {
                setAddress("");
              }
            })
            .catch((error) => console.log(error));
        });
        window?.ethereum.on("disconnect", () => {
          setAddress("");
        });
      }
    }
  }, []);

  // async function getENS(address) {
  //   const ens = new ENS({
  //     provider: window.ethereum,
  //     ensAddress: getEnsAddress("1"),
  //   });
  //   const result = await ens.getName(address);
  //   return result.name;
  // }

  async function getProvider() {
    if (provider) {
      console.log("Ethereum successfully detected!");
      connectAccount();
    } else {
      console.error("Please install MetaMask!");
      setStatus("NO WALLET PROVIDER DETECTED");
      // TODO: Set "No wallet provider detected" status here!
    }
  }

  async function connectAccount() {
    const ret = await provider.send("eth_requestAccounts", []);
    const account = ret.result ? ret.result[0] : ret[0];
    // setAddress((await getENS(account)) || account);
  }

  const display = address && address.length > 0;

  return (
    <>
      {/* {!!window.ethereum && ( */}
      <div className="ConnectButton">
        {display && <Input label="from" value={address} />}
        {!display && <button onClick={() => getProvider()}> CONNECT </button>}
      </div>
      {/* )} */}
      {/* {!window.ethereum && "No wallet provider detected"} */}
    </>
  );
};

export default ConnectButton;
