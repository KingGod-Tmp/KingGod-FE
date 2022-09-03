import { useRandomInt } from "../../hooks/useRandomInt";
import { unit, units } from "../../types/unit";

// Actions
export const RESET = "shop/RESET" as const;

//initialState

type UnitState = {
  shopList: units;
};

const initialState: UnitState = {
  shopList: [],
};

// Action Function
export function resetShopData(units: units) {
  return { type: RESET, shops: units };
}

// Action MiddleWare
export const resetShopDataMW = () => {
  return function (dispatch: any) {
    const RANDOM_ROLE0 = useRandomInt(0, 4);
    const RANDOM_STAR0 = useRandomInt(1, 3);
    const RANDOM_ROLE1 = useRandomInt(0, 4);
    const RANDOM_STAR1 = useRandomInt(1, 3);

    const heros = ["전사", "도적", "주술사", "도사", "궁사"];
    const units = [
      { unitName: heros[RANDOM_ROLE0], star: RANDOM_STAR0 },
      { unitName: heros[RANDOM_ROLE1], star: RANDOM_STAR1 },
    ];

    dispatch(resetShopData(units));
  };
};

// Reducer
export default function reducer(state = initialState, action: any = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "shop/RESET": {
      return { shopList: action.shops };
    }
    // do reducer stuff
    default:
      return state;
  }
}
