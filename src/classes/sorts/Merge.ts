import { Sort } from "./BaseSort";

// Time Complexity
// ---------------
// All cases: O(n * Log n)
// Stable: True
// ------------
export class MergeSort<T> extends Sort<T> {
  constructor() {
    super("Merge Sort");
  }

  public sort(array: T[], compare: ICompareFn<T>): T[] {
    // Base case for recursion
    if (array.length <= 1) {
      return array;
    }

    // Find middle of array
    const middle = Math.floor(array.length / 2);

    // Split array into two halves
    const leftArr = array.slice(0, middle);
    const rightArr = array.slice(middle);

    // Recurse down both halves
    const leftRec = this.sort(leftArr, compare);
    const rightRec = this.sort(rightArr, compare);

    // Return merged arrays
    return this.merge(leftRec, rightRec, compare);
  }

  // Helper method
  private merge(left: T[], right: T[], compare: ICompareFn<T>) {
    const sortedArray: T[] = [];

    // Until one array is empty
    while (left.length && right.length) {
      // Push
      if (compare(left[0], right[0]) < 0) {
        sortedArray.push(left.shift()!);
      } else {
        sortedArray.push(right.shift()!);
      }
    }

    return [...sortedArray, ...right, ...left];
  }
}
