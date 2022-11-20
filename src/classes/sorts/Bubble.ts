import { swap } from "../../utils/swap";
import { Sort } from "./BaseSort";

// Time Complexity
// ---------------
// Best: O(n)
// Average & Worst: O(n^2)

// Stable: True
// ------------
export class BubbleSort<T> extends Sort<T> {
  constructor() {
    super("Bubble Sort");
  }

  public sort(array: T[], compare: ICompareFn<T>): T[] {
    const _array = [...array];

    const lastStep = _array.length - 1;
    for (let currStep = 0; currStep < lastStep; currStep++) {
      for (let i = 0; i < lastStep - currStep; i++) {
        // If a[i] > a[i+1]
        if (compare(_array[i], _array[i + 1]) > 0) {
          swap(_array, i, i + 1);
        }
      }
    }
    return _array;
  }
}
