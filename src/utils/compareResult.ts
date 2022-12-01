import { IResult } from "../interfaces/IResult";

//Compare time: fastest -> slowest
export const compareResult = (a: IResult, b: IResult) => {
  return a.msec - b.msec;
};
