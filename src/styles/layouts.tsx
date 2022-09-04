import styled from "styled-components";

export const FlexColumnDiv = styled.div`
  display:flex;
  flex-direction:column;
`

export const FlexRowDiv = styled.div`
  display:flex;
  flex-direction:row;
`

export const HiddenDiv = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;

  width: 1px;
  height: 1px;
  overflow: hidden;

  border: 0px;
  margin: -1px;
`;