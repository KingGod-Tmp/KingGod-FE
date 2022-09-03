import React from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../../../styles/layouts";
import StageCard from "../../purpose/battle/stage/StageCard";
import BattleTimmer from "../../purpose/BattleTimmer";

const BattlePageBody = () => {
  return (
    <TimerAndStage>
      <BattleTimmer />
      <StageCard />
    </TimerAndStage>
  );
};

const TimerAndStage = styled(FlexColumnDiv)`
  height: 90%;
  justify-content: space-around;
`;

export default BattlePageBody;
