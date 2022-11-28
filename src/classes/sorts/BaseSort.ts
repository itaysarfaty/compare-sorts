export abstract class Sort<T> {
  get name() {
    return this._name;
  }

  private minTrials = 1;
  private maxTrials = 100_000;

  constructor(protected readonly _name: string) {}

  // Sort array in place
  abstract sort(array: T[], compare: ICompareFn<T>): void;

  public getResult(
    array: T[],
    compare: ICompareFn<T>,
    trials: number
  ): IResult {
    this.checkTrialSize(trials);
    let averageExecutionTime = 0;

    for (let i = 1; i <= trials; i++) {
      // Calculate execution time
      const start = performance.now();
      this.sort(array, compare);
      const end = performance.now();

      // Aggregate total milliseconds
      averageExecutionTime += end - start;
    }

    // Calculate average
    averageExecutionTime = averageExecutionTime / trials;

    //Round up to 5 decimal places
    const time = parseFloat(averageExecutionTime.toFixed(5));

    return { name: this._name, msec: time };
  }

  private checkTrialSize(size: number) {
    if (size < this.minTrials || size > this.maxTrials) {
      throw new Error(
        `Number of trials must be between ${this.minTrials} and ${this.maxTrials}`
      );
    }
  }
}
