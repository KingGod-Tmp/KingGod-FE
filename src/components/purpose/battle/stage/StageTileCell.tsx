import React from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../../../../styles/layouts";
import { unit } from "../../../../types/unit";

type GreetingsProps = {
  val: unit;
};

const StageTileCell = ({ val }: GreetingsProps) => {
  return (
    <>
      {val && (
        <>
          <div>{`${val?.star}성`}</div>
          <div>{val?.unitName}</div>
        </>
      )}
    </>
  );
};

export default StageTileCell;
