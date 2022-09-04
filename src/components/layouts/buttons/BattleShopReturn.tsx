import React from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { awaySelectedDataMW } from "../../../redux/modules/select";

const BattleShopReturn = () => {
  const dispatch = useAppDispatch();

  const clickToReturn = () => {
    dispatch(awaySelectedDataMW());
  };

  return <button onClick={clickToReturn}>돌아가기</button>;
};

export default BattleShopReturn;
