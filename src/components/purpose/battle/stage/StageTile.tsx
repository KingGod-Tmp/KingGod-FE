import React from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../../../../styles/layouts";
import { tile } from "../../../../types/tile";
import StageTileCell from "./StageTileCell";
import StageTileWall from "./StageTileWall";

type GreetingsProps = {
  tile: tile;
};

const StageTile = ({ tile }: GreetingsProps) => {
  return (
    <StageTileBox>
      {typeof tile == "number" ? (
        !(tile == 0) && <StageTileWall />
      ) : (
        <StageTileCell val={tile} />
      )}
    </StageTileBox>
  );
};

const StageTileBox = styled(FlexColumnDiv)`
justify-content:center;
  width: 50px;
  height: 50px;
  margin: 5px;
`;

export default StageTile;
