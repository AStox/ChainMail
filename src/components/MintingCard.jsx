import Card from "./Card";
import Header from "./Header";
import Stamp from "./Stamp";
import Input from "./Input";
import LineInput from "./LineInput";
import MintButton from "./MintButton";

import "./MintingCard.sass";
import DetailsButton from "./DetailsButton";

const MintingCard = () => (
  <div class="MintingCard">
    <Card>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Header />
        <div style={{ flex: "0 0 0", position: "relative" }}>
          <Stamp />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Input label="Cost" value="0.001e" />
      </div>
      <div className="horizontal-line" />
      <div className="main-content">
        <div style={{ flex: "0 1 auto", width: "20%" }}>
          <div className="vertical-line" />
        </div>
        <div className="lines-container">
          <LineInput />
          <LineInput />
          <LineInput />
          <LineInput />
          <MintButton />
          <DetailsButton />
        </div>
      </div>
    </Card>
  </div>
);

export default MintingCard;
