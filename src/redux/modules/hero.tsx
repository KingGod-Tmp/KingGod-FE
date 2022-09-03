import { hero } from "../../types/hero"

// Actions
export const SET = "hero/SET" as const
export const LEVELUP = "hero/LEVELUP" as const

// initialState
type HeroState = {
    heroes: hero[]
}
const initialState: HeroState = {
    heroes: [
        {
            name: "전사",
            level: 1,
            attack: 10,
            ability: 10,
            defense: 10,
            resistence: 10,
            health: 100,
            mana: 100
        },
        {
            name: "도적",
            level: 1,
            attack: 10,
            ability: 10,
            defense: 10,
            resistence: 10,
            health: 100,
            mana: 100
        },
        {
            name: "주술사",
            level: 1,
            attack: 10,
            ability: 10,
            defense: 10,
            resistence: 10,
            health: 100,
            mana: 100
        },
        {
            name: "도사",
            level: 1,
            attack: 10,
            ability: 10,
            defense: 10,
            resistence: 10,
            health: 100,
            mana: 100
        },
        {
            name: "궁사",
            level: 1,
            attack: 10,
            ability: 10,
            defense: 10,
            resistence: 10,
            health: 100,
            mana: 100
        }
    ]
} 

// Action Function
export function setHeroData() {
    return { type: SET }
}

export function levelUp(name: hero['name']) {
    return { type: LEVELUP, name: name }
}

// Action Middleware
export const levelUpMW = (level: hero['level']) => {
    return function (dispatch: any) {
        // dispatch(payLevelUp(level))
    }
}

export default function reducer(state = initialState, action: any = {}) {
    switch (action.type) {
        case "hero/SET": {
            return state
        }
        case "hero/LEVELUP": {
            const heroes = [...state.heroes]
            const hero = heroes.filter(hero => hero.name === action.name)[0]
            
            hero.level++
            if (hero.name === '전사') {
                hero.defense += 10
                hero.health += 50
            }
            if (hero.name === '도적') {
                hero.attack += 5
                hero.ability += 5
                hero.health += 25
                hero.mana += 25
            }
            if (hero.name === '주술사') {
                hero.ability += 10
                hero.mana += 50
            }
            if (hero.name === '도사') {
                hero.ability += 10
                hero.mana += 50
            }
            if (hero.name === '궁사') {
                hero.attack += 15
            }
            
            console.log(heroes)
            return { heroes: heroes }
        }
        default:
            return state
    }
}