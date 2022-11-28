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
export class BubbleSort<T> extends Sort<T> {
  constructor() {
    super("Bubble Sort");
  }

  public sort(array: T[], compare: ICompareFn<T>): T[] {
    // Get the index for the last test
    const lastStep = array.length - 1;

    // Step through array
    for (let currStep = 0; currStep < lastStep; currStep++) {
      // Step through array up to currStep
      for (let i = 0; i < lastStep - currStep; i++) {
        // If a[i] > a[i+1]
        if (compare(array[i], array[i + 1]) > 0) {
          swap(array, i, i + 1);
        }
      }
    }
    return array;
  }
}
