import React from 'react'

const HeroCard = ({ name }: any) => {
  return (
    <div className="heroCard">
      <span className="hero_level">Lv.1</span>
      <span className="hero_name">{ name }</span>
      <span className="hero_level"><button>Level Up</button></span>
    </div>
  )
}

export default HeroCard