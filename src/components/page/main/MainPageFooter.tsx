import React from 'react'
import styled from "styled-components";

const MainPageFooter = () => {
  return (
    <MainPageFooterBox><button><a href="/battle/fdg">전투 시작</a></button></MainPageFooterBox>
  )
}

const MainPageFooterBox = styled('div')`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #483838;
`

export default MainPageFooter