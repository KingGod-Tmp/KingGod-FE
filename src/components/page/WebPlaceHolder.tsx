import React from "react";
import styled from "styled-components";
import { devices } from "../../styles/device";
import { FlexColumnDiv } from "../../styles/layouts";

const WebPlaceHolder = () => {
  return <WebPlaceHolderSection>WebPlaceHolder</WebPlaceHolderSection>;
};

const WebPlaceHolderSection = styled(FlexColumnDiv)`
  @media ${devices.tablet} {
    display: none;
  }
`;

export default WebPlaceHolder;
