import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import Header from "./Header";
import Stamp from "./Stamp";
import Input from "./Input";
import TextInput from "./TextInput";
import MintButton from "./MintButton";
import DetailsButton from "./DetailsButton";
import Details from "./Details";

import { NETWORKS, INFURA_ID } from "../constants";

import "./MintingCard.sass";
import ConnectButton from "./ConnectButton";

const MintingCard = () => {
  const [showDesc, setShowDesc] = useState(false);
  const price = 0.001;
  const [to, setTo] = useState("");
  const [text, setText] = useState("");
  const [mintStatus, setMintStatus] = useState("");
  const [timeoutId, setTimeoutId] = useState();

  const [address, setAddress] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const _handleKey = (event) => {
    if (event.keyCode === 13) {
      focusNextElement();
    }
  };

  const setStatusWithTimeout = (text) => {
    setMintStatus(text);
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setMintStatus(""), 5000));
  };

  const sentConfirmation = () => {
    setText("");
    setStatusWithTimeout("Transmission Sent");
  };

  useEffect(() => {
    document.addEventListener("keydown", _handleKey);
    return () => {
      document.removeEventListener("keydown", _handleKey);
    };
  }, []);

  function focusNextElement() {
    if (document.activeElement) {
      var focusable = Array.from(document.querySelectorAll(".TextInput input"));
      var index = focusable.indexOf(document.activeElement);
      if (index > -1) {
        var nextElement = focusable[index + 1] || focusable[0];
        nextElement.focus();
      }
    }
  }

  return (
    <div className="MintingCard">
      <Card>
        {showDetails && <Details />}
        {!showDetails && (
          <>
            <div style={{ display: "flex", justifyContent: "start" }}>
              <Input label="Cost" value="0.001e" />
              <ConnectButton setStatus={setStatusWithTimeout} />
            </div>
            <div style={{ display: "flex" }}>
              <Header />
              <div style={{ flex: "0 0 0", position: "relative" }}>
                {mintStatus === "Sent" && <Stamp />}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "start" }}>
              <Input label="To" placeholder="0x..." setValue={setTo} value={to} />
            </div>
            <div style={{ display: "flex", justifyContent: "start" }}>
              <Input
                label="Status"
                long="true"
                disabled="true"
                placeholder="..."
                setValue={() => {}}
                value={mintStatus}
                className="status"
              />
            </div>
            <div className="horizontal-line" />
            <div className="main-content">
              <div style={{ flex: "0 1 auto", width: "20%" }}>
                <div className="vertical-line" />
              </div>
              <div className="lines-container">
                <TextInput
                  setValue={setText}
                  value={text}
                  setStatusWithTimeout={setStatusWithTimeout}
                />
                <MintButton
                  price={price}
                  to={to}
                  text={text}
                  setMintStatus={setMintStatus}
                  setText={setText}
                  setStatusWithTimeout={setStatusWithTimeout}
                  sentConfirmation={sentConfirmation}
                />
              </div>
            </div>
          </>
        )}
        <DetailsButton showDetails={showDetails} setShowDetails={setShowDetails} />
      </Card>
    </div>
  );
};

export default MintingCard;
