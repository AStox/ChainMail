import "normalize.css";
import React from "react";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import Head from "next/head";

function App() {
  return (
    <>
      <Head>
        <title>CHAIN MAIL</title>
      </Head>
      <div className="App">
        <div className="App-container">
          <TopBar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
