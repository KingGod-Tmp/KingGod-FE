import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import { hero } from "../../../types/hero";
import HeroBox from "../../main/HeroBox";

const MainPageBody = () => {
  const heroes = useAppSelector(state => state.hero.heroes)
  return (
    <HeroListSection>
      {heroes.map((hero: hero, idx) => {
        return <HeroBox key={"HeroBox" + idx} name={hero.name} level={hero.level}/>;
      })}
    </HeroListSection>
  );
};

const HeroListSection = styled.div`
  height: 100%;
  width: 100%;
`;

export default MainPageBody;
