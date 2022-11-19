export interface IResult {
  readonly name: string;
  readonly time: number;
}

//Compare time: fastest -> slowest
export const compareResult = (a: IResult, b: IResult) => {
  return a.time - b.time;
};
