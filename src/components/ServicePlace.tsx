import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import BattlePage from "../pages/BattlePage";
import MainPage from "../pages/MainPage";

const ServicePlace = () => {
  return (
    <ServiceSection>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/battle/:round" element={<BattlePage />} />
      </Routes>
    </ServiceSection>
  );
};

const ServiceSection = styled.div`
  width: 375px;
  height: inherit;
  background-color: lightgrey;
`;

export default ServicePlace;
