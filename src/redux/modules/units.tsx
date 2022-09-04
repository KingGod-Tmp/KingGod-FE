import { posit, unit, units } from "../../types/unit";
import { awaySelectedDataMW } from "./select";
import { resetShopDataMW } from "./shop";

// Actions
export const SET = "unit/SET" as const;
export const KEEP = "unit/KEEP" as const;
export const AWAY = "unit/AWAY" as const;
export const MOVE = "unit/MOVE" as const;

//initialState

type UnitState = {
  units: units;
};

const initialState: UnitState = {
  units: [],
};

// Action Function
export function setUnitData() {
  return { type: SET };
}

export function keepUnitData(unit: unit) {
  return { type: KEEP, units: unit };
}

export function awayUnitData(unitId: number) {
  return { type: AWAY, unitId: unitId };
}

export function moveUnitData(posit: posit, unit: unit) {
  return { type: MOVE, posit: posit, unit: unit };
}

// Action MiddleWare
export const keepUnitDataMW = (unit: unit) => {
  return function (dispatch: any) {
    dispatch(keepUnitData(unit));
    dispatch(resetShopDataMW());
  };
};

export const awayUnitDataMW = (unitId: number) => {
  return function (dispatch: any) {
    console.log("삭제 접수 됨", unitId);
    dispatch(awayUnitData(unitId));
  };
};

export const moveUnitDataMW = (posit: posit, unit: unit) => {
  return function (dispatch: any) {
    dispatch(awaySelectedDataMW())
    dispatch(moveUnitData(posit, unit));
    
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
    case "unit/KEEP": {
      let newUnits = [...state.units, action.units];
      return { units: newUnits };
    }
    case "unit/AWAY": {
      let newUnits = state.units.filter(
        (val, idx) => val.unitId != action.unitId
      );
      console.log(newUnits);
      return { units: newUnits };
    }
    case "unit/MOVE": {
      let selectedUnit = state.units.filter(
        (val, idx) => val.unitId == action.unit.unitId
      );
      const movedUnit = Object.assign(selectedUnit[0], {position:action.posit})
      console.log(movedUnit)
      let newUnits = state.units.filter(
        (val, idx) => val.unitId !== action.unit.unitId
      );
      console.log( {units: [...newUnits, movedUnit]})

      return { units: [...newUnits, movedUnit] };
    }
    // do reducer stuff
    default:
      return state;
  }
}
