import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Input from "./Input.jsx";
import ENS, { getEnsAddress, namehash } from "@ensdomains/ensjs";
import { ethers } from "ethers";
import MPOAbi from "../ABIs/MPO";
// import ENSAddress from '@ensdomains/react-ens-address'

import "./ConnectButton.sass";

const ConnectButton = () => {
  const [address, setAddress] = useState("");
  const MPOAddress = "0x113d32584D5B95365669b3dd423f3A3e73aBf3eD";
  let MPOContract;
  let provider;

  useEffect(() => {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    // MPOContract = new provider.eth.Contract(MPOAbi, MPOAddress);
  }, [window.ethereum]);

  useEffect(() => {
    const setAccounts = async () => {
      console.log("!!!!");
      const address = await provider.send("eth_requestAccounts", []);
      console.log(address);
      console.log("address");
      return address;
    };

    window.ethereum.on("connect", () => {
      // const address = setAccounts();
      console.log(address);
      setAddress(address);
      getENS(address).then((ensName) =>
        setAddress(ensName ? ensName : address)
      );
    });
    // if (window.ethereum.isConnected) {
    //   // const address = window.ethereum.selectedAddress;

    //   setAddress(address);
    //   getENS(address).then((ensName) => {
    //     setAddress(ensName ? ensName : address);
    //   });
    // }
    // window.ethereum.on("accountsChanged", (accounts) => {
    //   const address = window.ethereum.selectedAddress;
    //   setAddress(address);
    //   getENS(address).then((ensName) =>
    //     setAddress(ensName ? ensName : address)
    //   );
    // });
    // window.ethereum.on("disconnect", () => {
    //   setAddress("");
    // });
  }, []);

  async function getENS(address) {
    console.log("1");
    const ens = new ENS({
      provider: window.ethereum,
      ensAddress: getEnsAddress("1"),
    });
    console.log("2");
    const name = await ens.getName(address);
    console.log(name);
    return name.name;
  }

  async function getProvider() {
    const provider = await detectEthereumProvider();
    if (provider) {
      console.log("Ethereum successfully detected!");
      const ret = await provider.send("eth_requestAccounts", []);
      const account = ret.result[0];
      setAddress((await getENS(account)) || account);
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
