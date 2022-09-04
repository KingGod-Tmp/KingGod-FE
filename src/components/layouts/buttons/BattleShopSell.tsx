import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { awaySelectedDataMW } from "../../../redux/modules/select";
import { awayUnitDataMW } from "../../../redux/modules/units";
import { unit } from "../../../types/unit";

const BattleShopSell = () => {
  const dispatch = useAppDispatch();
  const selected: unit = useAppSelector((state) => state.select.selected);
  const clickToSell = () => {
    selected.unitId && dispatch(awayUnitDataMW(selected.unitId));
    dispatch(awaySelectedDataMW());
    console.log('팔았다',selected)
  };
  return <button onClick={clickToSell}>팔기</button>;
};

export default BattleShopSell;
