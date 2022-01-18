import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Input from "./Input.jsx";
import ENS, { getEnsAddress, namehash } from "@ensdomains/ensjs";
import Web3 from "web3";
import MPOAbi from "../ABIs/MPO";
// import ENSAddress from '@ensdomains/react-ens-address'

import "./ConnectButton.sass";

const ConnectButton = () => {
  const [address, setAddress] = useState("");
  const MPOAddress = "0x113d32584D5B95365669b3dd423f3A3e73aBf3eD";
  let web3;
  let MPOContract;

  useEffect(() => {
    web3 = new Web3(window.ethereum);
    MPOContract = new web3.eth.Contract(MPOAbi, MPOAddress);
  }, [window.ethereum]);

  useEffect(() => {
    // window.ethereum.on("connect", () => {
    //   const address = window.ethereum.selectedAddress;
    //   console.log(address);
    //   setAddress(address);
    //   getENS(address).then((ensName) =>
    //     setAddress(ensName ? ensName : address)
    //   );
    // });
    if (window.ethereum.isConnected) {
      const address = window.ethereum.selectedAddress;
      setAddress(address);
      getENS(address).then((ensName) => {
        setAddress(ensName ? ensName : address);
      });
    }
    window.ethereum.on("accountsChanged", (accounts) => {
      const address = window.ethereum.selectedAddress;
      setAddress(address);
      getENS(address).then((ensName) =>
        setAddress(ensName ? ensName : address)
      );
    });
    window.ethereum.on("disconnect", () => {
      setAddress("");
    });
  }, []);

  async function getENS(address) {
    const ens = new ENS({
      provider: window.ethereum,
      ensAddress: getEnsAddress("1"),
    });
    const name = await ens.getName(address);

    return name.name;
  }

  async function getProvider() {
    const provider = await detectEthereumProvider();
    if (provider) {
      console.log("Ethereum successfully detected!");
      provider.request?.({ method: "eth_requestAccounts" });
    } else {
      console.error("Please install MetaMask!");
    }
  }
  console.log(address);

  const display = address && address.length > 0;

  return (
    <div className="ConnectButton">
      {display && <Input label="from" value={address} />}
      {!display && <button onClick={() => getProvider()}> CONNECT </button>}
    </div>
  );
};

export default ConnectButton;
