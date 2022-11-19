import { swap } from "../utils/swap";
import { Sort } from "./BaseSort";

export class BubbleSort extends Sort {
  constructor() {
    super("Bubble Sort");
  }

  public sort(array: number[]): number[] {
    const maxIndex = array.length - 1;
    for (let step = 0; step < maxIndex; step++) {
      for (let i = 0; i < maxIndex - step; i++) {
        if (array[i] > array[i + 1]) {
          swap(array, i, i + 1);
        }
      }
    }
    return array;
  }
}
