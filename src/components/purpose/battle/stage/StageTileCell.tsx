import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hooks";
import { FlexColumnDiv, HiddenDiv } from "../../../../styles/layouts";
import { unit } from "../../../../types/unit";

type GreetingsProps = {
  val?: unit;
  selectable?: boolean;
  y?: number;
  x?: number;
};

const StageTileCell = ({ val, selectable, x, y }: GreetingsProps) => {
  return (
    <>
      {val && (
        <>
          <div>{`${val?.star}성`}</div>
          <div>{val?.unitName}</div>
        </>
      )}
      <HiddenDiv>
        {x} , {y}
      </HiddenDiv>
    </>
  );
};

export default StageTileCell;
