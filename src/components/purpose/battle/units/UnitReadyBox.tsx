import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hooks";
import { FlexRowDiv } from "../../../../styles/layouts";
import UnitCell from "./UnitCell";

const UnitReadyBox = () => {
  const unitList = useAppSelector((state) => state.units.units);
  const readyUnitList = unitList.filter((val) => !val.position);

  return (
    <ReadyBox>
      {readyUnitList &&
        readyUnitList.map((val, idx) => {
          return <UnitCell key={"readyUnitListCell" + idx} val={val} ready />;
        })}
      {Array(12 - readyUnitList.length)
        .fill(0)
        .map((val, idx) => {
          return <UnitCell key={"NullUnitCell" + idx} shop/>;
        })}
    </ReadyBox>
  );
};

const ReadyBox = styled(FlexRowDiv)`
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
`;

export default UnitReadyBox;
