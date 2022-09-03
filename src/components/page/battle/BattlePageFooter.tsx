import React from "react";
import styled from "styled-components";
import ShopBar from "../../purpose/battle/shop/ShopBar";
import UnitReadyBox from "../../purpose/battle/units/UnitReadyBox";

const BattlePageFooter = () => {
  return (
    <div>
      {/* 대충 유닛 사는 버튼 있는 자리 */}
      <ShopBar/>
      {/* 유닛 줄 서있는 자리 */}
      <UnitReadyBox />
    </div>
  );
};

export default BattlePageFooter;
