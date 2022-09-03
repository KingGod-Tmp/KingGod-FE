import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hooks";
import { FlexRowDiv } from "../../../../styles/layouts";
import UnitCell from "./UnitCell";

const UnitReadyBox = () => {
  // const unitList = useAppSelector((state))



  return (
    <ReadyBox>
      {Array(12)
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
