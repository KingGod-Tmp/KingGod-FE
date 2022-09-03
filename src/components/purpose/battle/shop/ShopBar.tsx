import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { resetShopDataMW } from "../../../../redux/modules/shop";
import { FlexRowDiv } from "../../../../styles/layouts";
import BattleShopRecycle from "../../../layouts/buttons/BattleShopRecycle";
import UnitCell from "../units/UnitCell";

const ShopAndSearch = () => {
  const dispatch = useAppDispatch()
  React.useEffect(()=>{
    dispatch(resetShopDataMW())
  },[])

  const shopList = useAppSelector((state)=>state.shop.shopList)

  return (
    <ShopBox>
      <UnitCell val={shopList[0]} />
      <BattleShopRecycle />
      <UnitCell val={shopList[1]} />
    </ShopBox>
  );
};

const ShopBox = styled(FlexRowDiv)`
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  margin: 10px;
`;

export default ShopAndSearch;
