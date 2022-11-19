import { IResult } from "../interfaces/IResult";

export abstract class BaseSort {
  constructor(protected readonly name: string) {}

  // return sorted array
  abstract sort(array: number[]): number[];

  public getResult(array: number[]): IResult {
    const copyArr = [...array];
    const start = performance.now();
    this.sort(copyArr);
    const end = performance.now();

    // In milliseconds
    const rawTime = end - start;

    //Round up to 5 decimal places
    const time = parseFloat(rawTime.toFixed(5));
    return { name: this.name, time };
  }
}
