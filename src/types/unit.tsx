import { hero } from "./hero"

type posit = {x:number, y:number};

export type unit = {
  unitId?: number;
  unitName: hero["name"]
  star: number;
  position?: posit;
};

export type units = unit[];
