import { unit } from "../../types/unit";

// Actions
export const KEEP = "select/KEEP" as const;
export const AWAY = "select/AWAY" as const;

//initialState

type UnitState = {
  isSelected: boolean;
  selected: unit | null;
};

const initialState: UnitState = {
  isSelected: false,
  selected: { unitName: "", star: 0, position: { x: null, y: null } },
};

// Action Function
export function keepSelectedData(unit: unit) {
  return { type: KEEP, selected: unit };
}
export function awaySelectedData() {
  return { type: AWAY, selected: {} };
}

// Action MiddleWare
export const keepSelectedDataMW = (unit: unit) => {
  return function (dispatch: any) {
    console.log("미들웨어 들어옴", unit);
    dispatch(keepSelectedData(unit));
  };
};

export const awaySelectedDataMW = () => {
  return function (dispatch: any) {
    console.log("버리는 중");
    dispatch(awaySelectedData());
  };
};

// Reducer
export default function reducer(state = initialState, action: any = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "select/KEEP": {
      return { selected: action.selected, isSelected: true };
    }
    case "select/AWAY": {
      return { selected: {}, isSelected: false };
    }
    // do reducer stuff
    default:
      return state;
  }
}
