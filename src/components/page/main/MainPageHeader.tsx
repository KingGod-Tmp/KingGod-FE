import React from 'react'
import styled from "styled-components";

const MainPageHeader = () => {
  return (
    <MainPageHeaderBox>
      <span>💰50</span>
    </MainPageHeaderBox>
  )
}

const MainPageHeaderBox = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42855B;
`

export default MainPageHeader