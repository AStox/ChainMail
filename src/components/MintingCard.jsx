import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import Header from "./Header";
import Stamp from "./Stamp";
import Input from "./Input";
import LineInput from "./LineInput";
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

  const [address, setAddress] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const _handleKey = (event) => {
    if (event.keyCode === 13) {
      focusNextElement();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", _handleKey);
    return () => {
      document.removeEventListener("keydown", _handleKey);
    };
  }, []);

  function focusNextElement() {
    if (document.activeElement) {
      var focusable = Array.from(document.querySelectorAll(".LineInput input"));
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
              <ConnectButton />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Header />
              <div style={{ flex: "0 0 0", position: "relative" }}>
                {mintStatus == "Sent" && <Stamp />}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "start" }}>
              <Input
                label="To"
                placeholder="0x..."
                setValue={setTo}
                value={to}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "start" }}>
              <Input
                label="Status"
                placeholder="..."
                setValue={() => {}}
                value={mintStatus}
              />
            </div>
            <div className="horizontal-line" />
            <div className="main-content">
              <div style={{ flex: "0 1 auto", width: "20%" }}>
                <div className="vertical-line" />
              </div>
              <div className="lines-container">
                <LineInput setValue={setText} value={text} />
                {/* // <LineInput id="line1" setValue={setLine1} value={line1} />
                // <LineInput id="line2" setValue={setLine2} value={line2} />
                // <LineInput id="line3" setValue={setLine3} value={line3} />
                // <LineInput id="line4" setValue={setLine4} value={line4} /> */}
                <MintButton
                  price={price}
                  to={to}
                  text={text}
                  setMintStatus={setMintStatus}
                />
              </div>
            </div>
          </>
        )}
        <DetailsButton
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      </Card>
    </div>
  );
};

export default MintingCard;
