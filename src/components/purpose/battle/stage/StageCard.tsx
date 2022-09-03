import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hooks";
import { FlexRowDiv } from "../../../../styles/layouts";
import { manyTileLine } from "../../../../types/tile";
import StageTileLine from "./StageTileLine";

const StageCard = () => {
  const unitList = useAppSelector((state) => state.units.units);
  const fightUnitList = unitList.filter((val) => val.position);

  //0은 빈공간 1은 장애물
  const mapTile: manyTileLine = [
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
  ];

  const readyTile: manyTileLine = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < fightUnitList.length; i++) {
    readyTile[fightUnitList[i].position.x][fightUnitList[i].position.y] =
      fightUnitList[i];
  }

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
