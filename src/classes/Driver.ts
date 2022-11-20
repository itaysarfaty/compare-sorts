import { Collection } from "./Collection";
import { compareResult, IResult } from "../interfaces/IResult";
import { Sort } from "../sorts/BaseSort";

export class Driver {
  constructor(
    private sortingAlgs: Sort[],
    private collection: Collection = new Collection()
  ) {
    this.sortingAlgs = sortingAlgs;
    this.collection = collection;
  }

  public getResults() {
    const results: IResult[] = [];

    // Get result for each sorting alg
    this.sortingAlgs.forEach((alg) => {
      const result = alg.getResult(this.collection.numbers);
      results.push(result);
    });

    // Sort: fastest -> slowest
    results.sort(compareResult);
    return { size: this.collection.size, results };
  }

  public reset(size: number = this.collection.size) {
    this.collection.new(size);
  }
}
