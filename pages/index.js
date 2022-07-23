import "normalize.css";
import React from "react";
import Main from "../components/Main";
import TopBar from "../components/TopBar";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <TopBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
