import React from "react";
import styled from "styled-components";

import "./App.css";
import ServicePlace from "./components/ServicePlace";
import WebPlaceHolder from "./components/WebPlaceHolder";


function App() {
  return (
    <AppMain className="App">
      <WebPlaceHolder />
      <ServicePlace />
    </AppMain>
  );
}

const AppMain = styled.div`
  width:100vw;
  height:100vh;

  display:flex;
  justify-content:space-around;
  align-items:center;
`

export default App;
