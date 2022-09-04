import React from "react";
import { FlexRowDiv } from "../../../../styles/layouts";
import { tileLine } from "../../../../types/tile";
import StageTile from "./StageTile";

type GreetingsProps = {
  line: tileLine;
  y: number;
  friendly?: boolean;
};

const StageTileLine = ({ line, y, friendly }: GreetingsProps) => {
  return (
    <FlexRowDiv>
      {line.map((val, idx) => {
        return <StageTile key={"StageTile" + idx} tile={val} y={y} x={idx} friendly={friendly} />;
      })}
    </FlexRowDiv>
  );
};

export default StageTileLine;
