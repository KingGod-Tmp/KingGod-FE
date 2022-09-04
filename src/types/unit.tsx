import { hero } from "./hero"

type posit = {x:number|null, y:number|null};

export type unit = {
  unitId?: number;
  unitName: hero["name"];
  star: number;
  position?: posit;
};

export type units = unit[];
