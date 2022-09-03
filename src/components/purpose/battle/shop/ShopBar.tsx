import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { resetShopDataMW } from "../../../../redux/modules/shop";
import { keepUnitDataMW } from "../../../../redux/modules/units";
import { FlexRowDiv } from "../../../../styles/layouts";
import BattleShopRecycle from "../../../layouts/buttons/BattleShopRecycle";
import UnitCell from "../units/UnitCell";

const ShopAndSearch = () => {
  const dispatch = useAppDispatch();

  const unitList = useAppSelector((state) => state.units.units);
  const readyUnitList = unitList.filter((val) => !val.position);

  const shopList = useAppSelector((state) => state.shop.shopList);
  console.log(unitList);

  const ClickToBuyUnit = (num: number) => {
    if (readyUnitList.length > 11) {
      alert("더이상 구매 할 수 없습니다.");
      return;
    }
    const tmpUnit = { unitId: unitList.length, ...shopList[num] };
    dispatch(keepUnitDataMW(tmpUnit));
  };

  React.useEffect(() => {
    dispatch(resetShopDataMW());
  }, []);

  return (
    <ShopBox>
      <ShopItem onClick={() => ClickToBuyUnit(0)}>
        <UnitCell val={shopList[0]} />
      </ShopItem>
      <BattleShopRecycle />
      <ShopItem onClick={() => ClickToBuyUnit(1)}>
        <UnitCell val={shopList[1]} />
      </ShopItem>
    </ShopBox>
  );
};

const ShopItem = styled.div``;

const ShopBox = styled(FlexRowDiv)`
  height: 60px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  margin: 10px;
`;

export default ShopAndSearch;
