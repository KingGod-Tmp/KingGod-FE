import React from "react";
import styled from "styled-components";
import StageTileCell from "./StageTileCell";
import StageTileWall from "./StageTileWall";

type GreetingsProps = {
  tile: number;
};

const StageTile = ({ tile }: GreetingsProps) => {
  return (
    <StageTileBox>
      {tile == 1 ? <StageTileWall /> : <StageTileCell />}
    </StageTileBox>
  );
};

const StageTileBox = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
`;

export default StageTile;
