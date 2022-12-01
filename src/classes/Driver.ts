import { compareResult } from "../utils/compareResult";
import { Sort } from "./sorts/BaseSort";
import { Collection } from "./collections/BaseCollection";
import _ from "lodash";
import { IResult } from "../interfaces/IResult";

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

  // This method is used to test all the algorithms passed to the driver
  public test() {
    // Create test array of length 5
    this.generateCollection(5);

    // Initialize return array
    const results: { name: string; passed: boolean }[] = [];

    // Copy and sort the test array
    const validSort = [...this.collection.array].sort();

    this.sortingAlgs.forEach((sortingAlg) => {
      // Copy the collection
      const unsortedArray = [...this.collection.array];

      // Default "passed" state to false
      let passed = false;

      try {
        // Return result from sorting algorithm
        const sorted = sortingAlg.sort(unsortedArray, this.collection.compare);
        // Run a deep comparison against validSort
        passed = _.isEqual(validSort, sorted);
      } catch (err) {
        console.log(err);
      }

      // Update results
      results.push({
        name: sortingAlg.name,
        passed: passed,
      });
    });

    return results;
  }
}
