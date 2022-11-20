import { compareResult } from "../utils/compareResult";
import { Sort } from "./sorts/BaseSort";
import { Collection } from "./collections/BaseCollection";
import _ from "lodash";

export class Driver<T> {
  constructor(
    private sortingAlgs: Sort<T>[],
    private collection: Collection<T>
  ) {
    this.sortingAlgs = sortingAlgs;
    this.collection = collection;
  }

  public getResults(size: number, trials: number) {
    // Generate new collection
    this.generateCollection(size);

    // Empty array
    const results: IResult[] = [];

    // Add result from each sort to array
    this.sortingAlgs.forEach((alg) => {
      const result = alg.getResult(
        this.collection.array,
        this.collection.compare,
        trials
      );
      results.push(result);
    });

    // Sort: fastest -> slowest
    results.sort(compareResult);
    return { size: this.collection.size, trials, results };
  }

  // Create new list
  // Optional size -> Default: collection size
  private generateCollection(size: number = this.collection.size) {
    this.collection.new(size);
  }

  public test() {
    this.generateCollection(5);
    const results: { name: string; passed: boolean }[] = [];
    const trueSort = [...this.collection.array].sort();

    this.sortingAlgs.forEach((alg) => {
      const unsorted = [...this.collection.array];
      const sorted = alg.sort(unsorted, this.collection.compare);
      results.push({ name: alg.name, passed: _.isEqual(trueSort, sorted) });
    });
    return results;
  }
}
