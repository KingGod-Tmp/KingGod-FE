type posit = [number, number];

export type unit = {
  unitId: number;
  unitName: string;
  level: number;
  star: number;
  position?: posit;
};

export type units = unit[];
