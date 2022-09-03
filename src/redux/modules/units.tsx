// Actions
export const SET = "unit/SET" as const;
export const LOAD = "unit/LOAD" as const;
export const KEEP = "unit/KEEP" as const;
export const AWAY = "unit/AWAY" as const;

//initialState

type unit = {
  unitName: string;
  level: number;
  star: number;
};

type UnitState = {
  units: unit[]|null;
};

const initialState: UnitState = {
  units: [
    {
      unitName: "전사",
      level: 3,
      star: 1,
    },
    {
      unitName: "전사",
      level: 3,
      star: 1,
    },
    {
      unitName: "궁수",
      level: 2,
      star: 2,
    },
    {
      unitName: "궁수",
      level: 2,
      star: 1,
    },
  ],
};

// Action Function
export function setUnitData() {
  return { type: SET, units:[] };
}

// Action MiddleWare

// Reducer
