import { ICompareFn } from "../../interfaces/ICompareFn";
import { swap } from "../../utils/swap";
import { Sort } from "./BaseSort";

// Time Complexity
// ---------------
// Best & Average: O(n log(n))
// Worst: (n^2)
// ------------
// Stable: False
// In Place: True
// ------------

export class QuickSort<T> extends Sort<T> {
  constructor() {
    super("Quick Sort");
  }

  public sort(array: T[], compareFn: ICompareFn<T>) {
    this.quickSort(array, compareFn, 0, array.length - 1);
    return array;
  }

  private quickSort(
    array: T[],
    compareFn: ICompareFn<T>,
    left: number,
    right: number
  ) {
    // Base case
    if (array.length <= 1) {
      return array;
    }

    // Call partition to find pivot
    let pivot = this.partition(array, compareFn, left, right);

    // Recursive call through the left
    if (left < pivot - 1) {
      this.quickSort(array, compareFn, left, pivot - 1);
    }

    // Recursive call through the right
    if (pivot < right) {
      this.quickSort(array, compareFn, pivot, right);
    }
  }

  private partition(
    array: T[],
    compareFn: ICompareFn<T>,
    lPointer: number,
    rPointer: number
  ) {
    // Get the length between both pointers
    const spaceBetweenPointers = lPointer + rPointer;

    // Set pivot between both pointers
    const pivotValue = array[Math.floor(spaceBetweenPointers / 2)];

    // While the left and right pointers haven't crossed each other
    while (lPointer <= rPointer) {
      // Evaluate left side
      // Move the pointer right until you find a value that should come after the pivot
      while (compareFn(array[lPointer], pivotValue) < 0) {
        lPointer++;
      }

      // Evaluate right side
      // Move the pointer left until you find a value that should come before the pivot
      while (compareFn(array[rPointer], pivotValue) > 0) {
        rPointer--;
      }

      if (lPointer <= rPointer) {
        // Swap values and update pointers
        swap(array, lPointer, rPointer);
        lPointer++;
        rPointer--;
      }
    }
    return lPointer;
  }
}
