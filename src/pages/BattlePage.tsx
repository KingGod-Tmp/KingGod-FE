import React from "react";
import styled from "styled-components";
import BattlePageBody from "../components/page/battle/BattlePageBody";
import BattlePageFooter from "../components/page/battle/BattlePageFooter";
import BattlePageHeader from "../components/page/battle/BattlePageHeader";
import { FlexColumnDiv } from "../styles/layouts";

const BattlePage = () => {
  return (
    <BattlePageSection>
      <BattlePageHeader />
      <BattlePageBody />
      <BattlePageFooter />
    </BattlePageSection>
  );
};

const BattlePageSection = styled(FlexColumnDiv)`
  position: relative;
  width: inherit;
  height: inherit;
  justify-content: space-between;
`;

export default BattlePage;
