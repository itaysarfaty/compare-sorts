import { swap } from "../../utils/swap";
import { Sort } from "./BaseSort";

// Time Complexity
// ---------------
// Best: O(n)
// Average & Worst: O(n^2)
// ------------
// Stable: True
// In Place: True
// ------------
export class InsertionSort<T> extends Sort<T> {
  constructor() {
    super("Insertion Sort");
  }

  public sort(array: T[], compare: ICompareFn<T>): T[] {
    const len = array.length;

    // Get the next unsorted item
    for (let curr = 0; curr < len; curr++) {
      // Copy current index
      let step = curr;

      // Swap backwards until value that was in curr index is in place: array[step-1] > array[step]
      while (step > 0 && compare(array[step - 1], array[step]) > 0) {
        swap(array, step, --step);
      }
    }
    return array;
  }
}
