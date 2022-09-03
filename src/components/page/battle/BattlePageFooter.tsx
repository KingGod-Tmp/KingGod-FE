import React from "react";
import styled from "styled-components";
import ShopAndSearch from "../../purpose/battle/shop/ShopAndSearch";
import UnitReadyBox from "../../purpose/battle/units/UnitReadyBox";

const BattlePageFooter = () => {
  return (
    <div>
      {/* 대충 유닛 사는 버튼 있는 자리 */}
      <ShopAndSearch/>
      {/* 유닛 줄 서있는 자리 */}
      <UnitReadyBox />
    </div>
  );
};

export default BattlePageFooter;
