import React from "react";
import styled from "styled-components";
import { FlexColumnDiv } from "../../../../styles/layouts";
import { unit } from "../../../../types/unit";

type GreetingsProps = {
  val?: unit;
};

const UnitCell = ({ val }: GreetingsProps) => {
  return (
    <UnitCellBox>
      {val && (
        <>
          <div>{`${val?.star}성`}</div>
          <div>{val?.unitName}</div>
        </>
      )}
    </UnitCellBox>
  );
};

const UnitCellBox = styled(FlexColumnDiv)`
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export default UnitCell;
