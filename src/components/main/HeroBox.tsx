import React from 'react'
import styled from "styled-components";
import { useAppDispatch } from '../../redux/hooks';
import { levelUp } from '../../redux/modules/hero';
import { hero } from "../../types/hero"

const HeroBox = ({ name, level }: any) => {
  const dispatch = useAppDispatch()
  const cost = 2 ** (level - 1)
  function clickToLevelUp(hero: hero['name']) {
    console.log('clicked')
    dispatch(levelUp(hero))
  }

  return (
    <HeroRow>
      <span className="hero_level">{ level }</span>
      <span className="hero_name">{ name }</span>
      <LevelUp>
        <span className="level_up_button"><button onClick={() => clickToLevelUp(name)}>Level Up</button></span>
        <span className="level_up_cost">💰${ cost }</span>
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