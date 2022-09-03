import React from "react";
import { FlexRowDiv } from "../../../../styles/layouts";
import { tileLine } from "../../../../types/tile";
import StageTile from "./StageTile";

type GreetingsProps = {
  line: tileLine;
};

const StageTileLine = ({ line }: GreetingsProps) => {
  return (
    <FlexRowDiv>
      {line.map((val, idx) => {
        return <StageTile key={"StageTile"+idx} tile={val} />;
      })}
    </FlexRowDiv>
  );
};

export default StageTileLine;
