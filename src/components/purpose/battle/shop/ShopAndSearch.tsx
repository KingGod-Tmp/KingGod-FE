import React from "react";
import styled from "styled-components";
import { FlexRowDiv } from "../../../../styles/layouts";
import BattleSearchBtn from "../../../layouts/buttons/BattleSearchBtn";
import BattleShopBtn from "../../../layouts/buttons/BattleShopBtn";

const ShopAndSearch = () => {
  return (
    <ShopBox>
      <div>
        <BattleShopBtn />
      </div>
      <div>
        <BattleSearchBtn />
      </div>
    </ShopBox>
  );
};

const ShopBox = styled(FlexRowDiv)`
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 5px;
`;

export default ShopAndSearch;
