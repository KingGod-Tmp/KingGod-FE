import React from "react";
import styled from "styled-components";
import { FlexRowDiv } from "../../../../styles/layouts";
import StageTileLine from "./StageTileLine";

const StageCard = () => {
  
  //0은 빈공간 1은 장애물
  const mapTile = [
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
  ];

  const readyTile = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  return (
    <StageBox>
      {/* 적군 준비 자리 */}
      <EnemyZone>
        {mapTile.map((val, idx) => {
          return <StageTileLine key={"StageTileLine" + idx} line={val} />;
        })}
      </EnemyZone>
      {/* 아군 준비 자리 */}
      <FriendlyZone>
        {readyTile.map((val, idx) => {
          return <StageTileLine key={"StageTileLine" + idx} line={val} />;
        })}
      </FriendlyZone>
    </StageBox>
  );
};
const EnemyZone = styled.div``;

const FriendlyZone = styled.div`
  margin-top: 30px;
`;

const StageBox = styled(FlexRowDiv)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  height: 400px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;

export default StageCard;
