import React from "react";
import styled from "styled-components";
import { useRandomInt } from "../../../../hooks/useRandomInt";
import { FlexRowDiv } from "../../../../styles/layouts";
import BattleShopRecycle from "../../../layouts/buttons/BattleShopRecycle";
import StageTileCell from "../stage/StageTileCell";

const ShopAndSearch = () => {
  const RANDOM_ROLE = useRandomInt(0,4);
  const RANDOM_STAR = useRandomInt(0,4); 
  console.log(RANDOM_ROLE,RANDOM_STAR)



  return (
    <ShopBox>
      <BattleShopRecycle />
      <StageTileCell/>
    </ShopBox>
  );
};

const ShopBox = styled(FlexRowDiv)`
  height: 50px;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  margin: 10px;
`;

export default ShopAndSearch;
