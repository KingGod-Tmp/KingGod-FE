import React from 'react'
import styled from "styled-components";
import HeroBox from "../../main/HeroBox"

const HEROES: string[] = ['전사', '도적', '주술사', '도사', '궁사']

const MainPageBody = () => {
  return (
    <HeroListSection>
    {HEROES
      .map((hero: string)=> {
        return (
          <HeroBox
            name={hero}
          />
        )
      })}
    </HeroListSection>
  )
}

const HeroListSection = styled.div`
  height: 100%;
  width: 100%;
`

export default MainPageBody