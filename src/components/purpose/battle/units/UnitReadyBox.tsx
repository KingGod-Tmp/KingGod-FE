import React from "react";
import styled from "styled-components";
import { FlexRowDiv } from "../../../../styles/layouts";
import UnitCell from "./UnitCell";

const UnitReadyBox = () => {
  return (
    <ReadyBox>
      {Array(10)
        .fill(0)
        .map((val, idx) => {
          return <UnitCell />;
        })}
    </ReadyBox>
  );
};

const ReadyBox = styled(FlexRowDiv)`
justify-content:center;
flex-wrap: wrap;
padding: 5px;
`

export default UnitReadyBox;
