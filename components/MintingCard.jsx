import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import Header from "./Header";
import Stamp from "./Stamp";
import Input from "./Input";
import TextInput from "./TextInput";
import MintButton from "./buttons/MintButton";
import DetailsButton from "./buttons/DetailsButton";
import ConnectButton from "./buttons/ConnectButton";
import Details from "./Details";
import Status from "./Status";

// import "./MintingCard.sass";
const NETWORKS = process.env.NETWORKS;
const INFURA_ID = process.env.INFURA_ID;

import React from "react";
import Logo from "./Logo";
import CubeEmpty from "./CubeEmpty";

const MintingCard = () => {
  const [showDesc, setShowDesc] = useState(false);
  const price = 0.001;
  const [to, setTo] = useState("");
  const [text, setText] = useState("");
  const [mintStatus, setMintStatus] = useState("");
  const [timeoutId, setTimeoutId] = useState();

  const [address, setAddress] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const setStatusWithTimeout = (text) => {
    setMintStatus(text);
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setMintStatus(""), 5000));
  };

  const sentConfirmation = () => {
    setText("");
    setStatusWithTimeout("Transmission Sent");
  };

  return (
    <div className="MintingCard">
      <div className="card">
        {showDetails && <Details />}
        {!showDetails && (
          <>
            <div className="main-content">
              <div style={{ flex: "1 1 auto" }}>
                <div className="vertical-line">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "0 1vw 0 0",
                      padding: "0vw 0 3vw 0",
                    }}
                  >
                    <div style={{ flex: "1 1 auto", alignSelf: "end" }}>
                      <CubeEmpty />
                    </div>
                    <Input label="ID" placeholder="0x..." setValue={setTo} value={to} />
                    <Input label="FROM" placeholder="0x..." setValue={setTo} value={to} />
                    <Input label="TO" placeholder="0x..." setValue={setTo} value={to} />
                  </div>
                </div>
              </div>
              <div className="lines-container">
                <TextInput
                  setValue={setText}
                  value={text}
                  setStatusWithTimeout={setStatusWithTimeout}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MintingCard;
