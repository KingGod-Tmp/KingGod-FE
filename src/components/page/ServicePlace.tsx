import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import BattlePage from "../../pages/BattlePage";
import MainPage from "../../pages/MainPage";
import { FlexColumnDiv, FlexRowDiv } from "../../styles/layouts";

const ServicePlace = () => {
  return (
    <ServiceSection>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/battle/:round" element={<BattlePage />} />
      </Routes>
      {/* <BottomButtonBar>대충 버튼 세개 있는 바</BottomButtonBar> */}
    </ServiceSection>
  );
};

const ServiceSection = styled(FlexColumnDiv)`
  width: 375px;
  height: inherit;
  position: relative;
  background-color: lightgrey;
`;

const BottomButtonBar = styled(FlexRowDiv)`
  height: 60px;

  margin-top: 0px;

  background-color: black;
  color: #fff;
`;

export default ServicePlace;
