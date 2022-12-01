import { ICompareFn } from "../../interfaces/ICompareFn";
import { IResult } from "../../interfaces/IResult";

type trialBounds = { min: number; max: number };
export abstract class Sort<T> {
  get name() {
    return this._name;
  }

  protected readonly _name: string;
  private readonly trialBounds: trialBounds;

  constructor(
    name: string,
    trialBounds: trialBounds = { min: 1, max: 100_000 }
  ) {
    this._name = name;
    this.trialBounds = trialBounds;
  }

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
    if (size < this.trialBounds.min || size > this.trialBounds.max) {
      throw new Error(
        `Number of trials must be between ${this.trialBounds.min} and ${this.trialBounds.max}`
      );
    }
  }
}
