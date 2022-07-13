import MintingCard from "../MintingCard";
// import "./Border.sass";
import TopBar from "./TopBar";
const Border = () => (
  <>
    <svg viewBox="0 0 260 152" class="svg" preserveAspectRatio="none">
      <g>
        <path d="M 0 0 L 260 0 L 260 152 L 0 152 z M 5 33 L 5 143 C 5 147 9 147 9 147 L 251 147 C 255 147 255 143 255 143 L 255 33 C 255 33 255 29 251 29 L 199 29 C 199 29 195 29 195 25 L 195 11 C 195 11 195 7 191 7 L 68.575 7 C 68.575 7 64.575 7 64.575 11 L 64.575 25 C 64.575 25 64.575 29 60.575 29 L 9 29 C 9 29 5 29 5 33"></path>
      </g>
    </svg>
    <TopBar />
    <MintingCard />
  </>
);
export default Border;
