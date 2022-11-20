import { CompareFn } from "../../interfaces/CompareFn";
import { IResult } from "../../interfaces/IResult";

export abstract class Sort<T> {
  constructor(protected readonly name: string) {}

  // Sort array in place
  abstract sort(array: T[], compare: CompareFn<T>): void;

  public getResult(array: T[], compare: CompareFn<T>, trials: number): IResult {
    this.checkTrialSize(trials);
    let averageExecutionTime = 0;

    for (let i = 1; i <= trials; i++) {
      // New copy of array
      const copiedArr = [...array];

      // Calculate execution time
      const start = performance.now();
      this.sort(copiedArr, compare);
      const end = performance.now();

      // Aggregate total milliseconds
      averageExecutionTime += end - start;
    }

    // Calculate average
    averageExecutionTime = averageExecutionTime / trials;

    //Round up to 5 decimal places
    const time = parseFloat(averageExecutionTime.toFixed(5));

    return { name: this.name, msec: time };
  }

  private checkTrialSize(size: number) {
    const min = 1;
    const max = 100_000;
    if (size < min || size > max) {
      throw new Error(`Number of trials must be between ${min} and ${max}`);
    }
  }
}
