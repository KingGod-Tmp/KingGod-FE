import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/hooks";
import { FlexRowDiv } from "../../../../styles/layouts";
import UnitCell from "./UnitCell";

const UnitReadyBox = () => {
  const unitList = useAppSelector((state) => state.units.units);
  console.log(unitList);
  const readyUnitList = unitList.filter((val) => !val.position);
  console.log(readyUnitList);

  return (
    <ReadyBox>
      {readyUnitList.map((val, idx) => {
        return <UnitCell key={"readyUnitListCell" + idx} val={val} />;
      })}
      {Array(12 - readyUnitList.length)
        .fill(0)
        .map((val, idx) => {
          return <UnitCell key={"NullUnitCell" + idx} />;
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
