import { useEffect, useState } from "react";
import { ethers } from "ethers";
import RaisedText from "./RaisedText";
// import MPOAbi from "../ABIs/MPO";
// import ENS, { getEnsAddress } from "@ensdomains/ensjs";
// import ENSAddress from '@ensdomains/react-ens-address'

const ConnectButton = () => {
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState(null);
  const [noProvider, setNoProvider] = useState(true);
  let connected = false;

  useEffect(() => {
    if (window?.ethereum) {
      setProvider(new ethers.providers.Web3Provider(window?.ethereum));
      setNoProvider(false);
    }
    // MPOContract = new provider.eth.Contract(MPOAbi, MPOAddress);
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("connect", () => {
        provider
          .listAccounts()
          .then((result) => {
            if (result.length > 0) {
              connectAccount();
            }
          })
          .catch((error) => console.log(error));
      });
      window.ethereum.on("accountsChanged", (accounts) => {
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
      window.ethereum.on("disconnect", () => {
        setAddress("");
      });
    }
  }, []);

  async function getENS(address) {
    const ens = new ENS({
      provider: window.ethereum,
      ensAddress: getEnsAddress("1"),
    });
    const result = await ens.getName(address);
    return result.name;
  }

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
    setAddress(account);
  }

  return (
    <>
      <div className="ConnectButton">
        <button onClick={() => getProvider()}>
          <RaisedText text={address.length > 0 ? address : "CONNECT"} height="25" width="170" />{" "}
        </button>
        {connected && (
          <button onClick={() => getProvider()}>
            <RaisedText text="CONNECTED" height="25" width="190" />{" "}
          </button>
        )}
      </div>
      {!provider && "No wallet provider detected"}
    </>
  );
};

export default ConnectButton;
