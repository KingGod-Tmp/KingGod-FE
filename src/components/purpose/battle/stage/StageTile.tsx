import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  awaySelectedDataMW,
  keepSelectedDataMW,
} from "../../../../redux/modules/select";
import { moveUnitData } from "../../../../redux/modules/units";
import { FlexColumnDiv } from "../../../../styles/layouts";
import { tile } from "../../../../types/tile";
import UnitCell from "../units/UnitCell";
import StageTileCell from "./StageTileCell";
import StageTileWall from "./StageTileWall";

type GreetingsProps = {
  tile: tile;
  friendly?: boolean;
  y?: number;
  x?: number;
};

const StageTile = ({ tile, friendly, x, y }: GreetingsProps) => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.select);

  const clickToMoveUnit = () => {
    if (selected.isSelected) {
      console.log(x, y, selected.selected);
      const posit = { x: y, y: x };
      console.log(posit);
      const unit = selected.selected;
      dispatch(moveUnitData(posit, unit));
      dispatch(awaySelectedDataMW());
      return;
    }
  };

  return (
    <>
      {friendly ? (
        <FriendlyTileBox
          onClick={clickToMoveUnit}
          style={{
            boxShadow: `${
              selected.isSelected ? "0px 0px 2px 2px black" : "none"
            }`,
            cursor: `${
              selected.isSelected ? "pointer" : "inherit"
            }`,
          }}
        >
          {typeof tile == "number" ? (
            !(tile == 0) && <StageTileWall />
          ) : (
            <UnitCell field val={tile} />
          )}
        </FriendlyTileBox>
      ) : (
        <StageTileBox>
          {typeof tile == "number" ? (
            !(tile == 0) && <StageTileWall />
          ) : (
            <StageTileCell val={tile} />
          )}
        </StageTileBox>
      )}
    </>
  );
};

const StageTileBox = styled(FlexColumnDiv)`
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 5px;
`;

const FriendlyTileBox = styled(StageTileBox)``;

const HighLightedDiv = styled.div``;

export default StageTile;
