import Border from "../components/new-design/Border";
import "normalize.css";
// import "./App.sass";
import React from "react";
import Main from "../components/Main";
import LogoBar from "../components/LogoBar";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        {/* <Border /> */}
        <LogoBar />
        <Main />

        {/* <MintingCard /> */}
        {/* <div className="svg-container">
          <Telegram />
        </div> */}
      </div>
    </div>
  );
}

export default App;
