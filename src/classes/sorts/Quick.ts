import { swap } from "../../utils/swap";
import { Sort } from "./BaseSort";

// Time Complexity
// ---------------
// Best & Average: O(n log(n))
// Worst: (n^2)

// Stable: False
// ------------

export class QuickSort<T> extends Sort<T> {
  constructor() {
    super("Quick Sort");
  }

  public sort(array: T[], compareFn: ICompareFn<T>) {
    const _array = [...array];

    this.quickSort(_array, compareFn, 0, array.length - 1);

    return _array;
  }

  private quickSort(
    array: T[],
    compareFn: ICompareFn<T>,
    left: number,
    right: number
  ) {
    if (array.length > 1) {
      let pivot = this.partition(array, compareFn, left, right);

      if (left < pivot - 1) {
        this.quickSort(array, compareFn, left, pivot - 1);
      }

      if (pivot < right) {
        this.quickSort(array, compareFn, pivot, right);
      }
    }
  }

  private partition(
    array: T[],
    compareFn: ICompareFn<T>,
    left: number,
    right: number
  ) {
    let pivot = array[Math.floor((right + left) / 2)];

    while (left <= right) {
      while (compareFn(array[left], pivot) < 0) {
        left++;
      }

      while (compareFn(array[right], pivot) > 0) {
        right--;
      }

      if (left <= right) {
        swap(array, left, right);
        left++;
        right--;
      }
    }
    return left;
  }
}
