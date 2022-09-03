import { unit, units } from "../../types/unit";

// Actions
export const SET = "unit/SET" as const;
export const LOAD = "unit/LOAD" as const;
export const KEEP = "unit/KEEP" as const;
export const AWAY = "unit/AWAY" as const;

//initialState

type UnitState = {
  units: units;
};

const initialState: UnitState = {
  units: [
    {
      unitId: 0,
      unitName: "전사",
      level: 3,
      star: 1,
    },
    {
      unitId: 1,
      unitName: "전사",
      level: 3,
      star: 1,
    },
    {
      unitId: 2,
      unitName: "궁수",
      level: 2,
      star: 2,
      position: { x: 0, y: 1 },
    },
    {
      unitId: 3,
      unitName: "궁수",
      level: 2,
      star: 1,
    },
  ],
};

// Action Function
export function setUnitData() {
  return { type: SET };
}

// function loadUnitData(units:unit[]) {
//   return { type: LOAD, units:units}
// }

export function keepUnitData(unit: unit) {
  return { type: KEEP, units: unit };
}

export function awayUnitData(unitId: number) {
  return { type: AWAY, unitId: unitId };
}

// Action MiddleWare
export const keepUnitDataMW = (unit: unit) => {
  return function (dispatch: any) {
    dispatch(keepUnitData(unit));
  };
};

export const awayUnitDataMW = (unitId: number) => {
  return function (dispatch: any) {
    dispatch(awayUnitData(unitId));
  };
};

// Reducer
export default function reducer(state = initialState, action: any = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "unit/SET": {
      return { units: [] };
    }
    // case "unit/LOAD": {
    //   return { drugs: [...action.drugs] };
    // }
    case "unit/KEEP": {
      let newUnits = [...state.units, action.units];
      return { units: newUnits };
    }
    case "unit/AWAY": {
      let newUnits = state.units.filter(
        (val, idx) => val.unitId != action.unitId
      );
      return { units: newUnits };
    }
    // do reducer stuff
    default:
      return state;
  }
}
