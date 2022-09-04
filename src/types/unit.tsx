import { hero } from "./hero";

export type posit = { x: number | undefined; y: number | undefined };

export type unit = {
  unitId?: number;
  unitName: hero["name"];
  star: number;
  position?: posit;
};

export type units = unit[];
