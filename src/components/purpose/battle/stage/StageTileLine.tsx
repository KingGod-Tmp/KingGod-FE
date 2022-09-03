import React from "react";
import { FlexRowDiv } from "../../../../styles/layouts";
import StageTile from "./StageTile";

type GreetingsProps = {
  line: number[];
};

const StageTileLine = ({ line }: GreetingsProps) => {
  return (
    <FlexRowDiv>
      {line.map((val, idx) => {
        return <StageTile tile={val} />;
      })}
    </FlexRowDiv>
  );
};

export default StageTileLine;
