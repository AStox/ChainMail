import { useEffect, useState } from "react";
import ENS, { getEnsAddress } from "@ensdomains/ensjs";
import { ethers } from "ethers";
import Input from "../Input.jsx";
// import MPOAbi from "../ABIs/MPO";
// import ENSAddress from '@ensdomains/react-ens-address'

import "./ConnectBig.sass";
import React from "react";

const ConnectBig = ({ setDisplaySplash }) => {
  return (
    <div className="ConnectBig">
      <button onClick={() => setDisplaySplash(false)}>
        <p>CONNECT</p>
      </button>
    </div>
  );
};

export default ConnectBig;
