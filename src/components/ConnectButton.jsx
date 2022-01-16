import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Input from "./Input.jsx";
import ENS, { getEnsAddress, namehash } from "@ensdomains/ensjs";
// import ENSAddress from '@ensdomains/react-ens-address'

import "./ConnectButton.sass";

const ConnectButton = () => {
  const [address, setAddress] = useState("");

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
      console.log("connected!");
      const address = window.ethereum.selectedAddress;
      setAddress(address);
      console.log(getENS(address));
      getENS(address).then((ensName) => {
        setAddress(ensName ? ensName : address);
      });
    }
    window.ethereum.on("accountsChanged", (accounts) => {
      console.log("acount changed!");
      const address = window.ethereum.selectedAddress;
      setAddress(address);
      getENS(address).then((ensName) =>
        setAddress(ensName ? ensName : address)
      );
    });
  }, []);

  async function getENS(address) {
    const ens = new ENS({
      provider: window.ethereum,
      ensAddress: getEnsAddress("1"),
    });
    console.log("ok");
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

  return (
    <div className="ConnectButton">
      {address?.length > 0 && <Input label="from" value={address} />}
      {address?.length == 0 && (
        <button onClick={() => getProvider()}> CONNECT </button>
      )}
    </div>
  );
};

export default ConnectButton;
