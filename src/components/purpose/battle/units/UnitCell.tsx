import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../../redux/hooks";
import { keepSelectedDataMW } from "../../../../redux/modules/select";
import { FlexColumnDiv, HiddenDiv } from "../../../../styles/layouts";
import { unit } from "../../../../types/unit";

type GreetingsProps = {
  val?: unit;
  ready?: boolean;
  shop?: boolean;
};

const UnitCell = ({ val, ready, shop }: GreetingsProps) => {
  const dispatch = useAppDispatch();
  const UnitCellRef = React.useRef<HTMLDivElement>(null);

  const clickToSelect = () => {
    console.log("눌림");
    const unitData = UnitCellRef.current?.innerText.split("\n");

    const tmpUnitId = unitData && parseInt(unitData[0]);
    const tmpUnitStar = unitData && parseInt(unitData[1][0]);
    const tmpUnitName = unitData && unitData[2];
    const unit = tmpUnitId &&
      tmpUnitName &&
      tmpUnitStar && {
        unitId: tmpUnitId,
        unitName: tmpUnitName,
        star: tmpUnitStar,
      };

    unit && dispatch(keepSelectedDataMW(unit));
  };

  React.useEffect(() => {
    UnitCellRef.current?.addEventListener("click", clickToSelect);
    return () => {
      UnitCellRef.current?.removeEventListener("click", clickToSelect);
    };
  }, []);

  return (
    <>
      {ready && (
        <UnitCellBox ref={UnitCellRef}>
          {val && (
            <>
              <HiddenDiv>{val.unitId}</HiddenDiv>
              <div>{`${val?.star}성`}</div>
              <div>{val?.unitName}</div>
            </>
          )}
        </UnitCellBox>
      )}
      {shop && (
        <UnitCellBox>
          {val && (
            <>
              <div>{`${val?.star}성`}</div>
              <div>{val?.unitName}</div>
            </>
          )}
        </UnitCellBox>
      )}
    </>
  );
};



const UnitCellBox = styled(FlexColumnDiv)`
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px black;
  }
`;

export default UnitCell;
