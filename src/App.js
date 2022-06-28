import MintingCard from "./components/MintingCard";
import "normalize.css";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <MintingCard />
        {/* <div className="svg-container">
          <Telegram />
        </div> */}
      </div>
    </div>
  );
}

export default App;
