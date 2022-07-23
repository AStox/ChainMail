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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap"
          rel="stylesheet"
        />
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
