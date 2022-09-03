import React from 'react'
import styled from "styled-components";
import MainPageBody from "../components/page/main/MainPageBody";
import MainPageFooter from "../components/page/main/MainPageFooter";
import MainPageHeader from "../components/page/main/MainPageHeader";
import { FlexColumnDiv } from "../styles/layouts";

const MainPage = () => {
  return (
    <MainPageSection>
      <MainPageHeader />
      <MainPageBody />
      <MainPageFooter />
    </MainPageSection>
  )
}

const MainPageSection = styled(FlexColumnDiv)`
  position: relative;
  width: inherit;
  height: inherit;
  justify-content: space-between;
`

export default MainPage