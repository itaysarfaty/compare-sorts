import { swap } from "../../utils/swap";
import { Sort } from "./BaseSort";

export class BubbleSort<T> extends Sort<T> {
  constructor() {
    super("Bubble Sort");
  }

  public sort(array: T[], compare: CompareFn<T>): T[] {
    const lastStep = array.length - 1;
    for (let currStep = 0; currStep < lastStep; currStep++) {
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
