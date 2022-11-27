export abstract class Sort<T> {
  get name() {
    return this._name;
  }
  constructor(protected readonly _name: string) {}

  // Sort array in place
  abstract sort(array: T[], compare: ICompareFn<T>): T[];

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
    const min = 1;
    const max = 100_000;
    if (size < min || size > max) {
      throw new Error(`Number of trials must be between ${min} and ${max}`);
    }
  }
}
