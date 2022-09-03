import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import WebPlaceHolder from "./components/WebPlaceHolder";
import BattlePage from "./pages/BattlePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <WebPlaceHolder />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/battle/:round" element={<BattlePage />} />
      </Routes>
    </div>
  );
}

export default App;
