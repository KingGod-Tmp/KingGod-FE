import React from 'react'
import styled from "styled-components";

const HeroBox = ({ name }: any) => {
  return (
    <HeroRow>
      <span className="hero_level">Lv.1</span>
      <span className="hero_name">{ name }</span>
      <LevelUp>
        <span className="level_up_button"><button>Level Up</button></span>
        <span className="level_up_cost">💰1</span>
      </LevelUp>
      
    </HeroRow>
  )
}

const HeroRow = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #90B77D;
`
const LevelUp = styled.div`
  width: 110px;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export default HeroBox