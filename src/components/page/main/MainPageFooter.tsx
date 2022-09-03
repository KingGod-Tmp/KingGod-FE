import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useAppDispatch } from '../../../redux/hooks';
import { setUnitData } from '../../../redux/modules/units';

const MainPageFooter = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const clickToStartBattle = () => {
    navigate("/battle/fdg")
    dispatch(setUnitData())
  }
  
  return (
    <MainPageFooterBox><button onClick={clickToStartBattle}>전투 시작</button></MainPageFooterBox>
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