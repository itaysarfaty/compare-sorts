import { ICompareFn } from "../../interfaces/ICompareFn";
import { IResult } from "../../interfaces/IResult";

export abstract class Sort<T> {
  get name() {
    return this._name;
  }

  private minTrials = 1;
  private maxTrials = 100_000;

  constructor(protected readonly _name: string) {}

  // Sort array in place
  abstract sort(array: T[], compare: ICompareFn<T>): T[];

  public getResult(
    array: T[],
    compare: ICompareFn<T>,
    trials: number
  ): IResult {
    this.validateTrials(trials);
    let totalTime = 0;

    for (let i = 1; i <= trials; i++) {
      // Calculate execution time
      const start = performance.now();
      this.sort(array, compare);
      const end = performance.now();

      // Aggregate total milliseconds
      totalTime += end - start;
    }

    // Calculate average
    const averageTime = totalTime / trials;

    //Round up to 5 decimal places
    const formattedTime = parseFloat(averageTime.toFixed(5));

    return { name: this._name, msec: formattedTime };
  }

  private validateTrials(size: number) {
    if (size < this.minTrials || size > this.maxTrials) {
      throw new Error(
        `Number of trials must be between ${this.minTrials} and ${this.maxTrials}`
      );
    }
  }
}
