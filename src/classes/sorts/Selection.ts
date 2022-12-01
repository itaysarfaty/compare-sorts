import { ICompareFn } from "../../interfaces/ICompareFn";
import { swap } from "../../utils/swap";
import { Sort } from "./BaseSort";

// Time Complexity
// ---------------
// Best & Average & Worst: O(n^2)
// ------------
// Stable: False
// In Place: True
// ------------
export class SelectionSort<T> extends Sort<T> {
  constructor() {
    super("Selection Sort");
  }

  public sort(array: T[], compare: ICompareFn<T>): T[] {
    // Set the max length
    const len = array.length;

    // Step through array
    for (let step = 0; step < len; step++) {
      // Set the min pointer to the first step
      let minPointer = step;

      // Go through remaining steps
      for (let i = step; i < len; i++) {
        // Update pointer if array[i] < array[minPointer]
        if (compare(array[i], array[minPointer]) < 0) {
          minPointer = i;
        }
      }
      // Swap the current step with the minimum value
      swap(array, step, minPointer);
    }
    return array;
  }
}
