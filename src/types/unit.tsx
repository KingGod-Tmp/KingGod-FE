import { hero } from "./hero"

type posit = [number, number];

export type unit = {
  unitId: number;
  unitName: hero["name"]
  star: number;
  position?: posit;
};

export type units = unit[];
