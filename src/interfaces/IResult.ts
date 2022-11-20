export interface IResult {
  readonly name: string;
  readonly msec: number;
}

//Compare time: fastest -> slowest
export const compareResult = (a: IResult, b: IResult) => {
  return a.msec - b.msec;
};
