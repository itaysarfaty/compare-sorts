import { Sort } from "./BaseSort";
import { BubbleSort } from "./Bubble";
import { MergeSort } from "./Merge";
import { QuickSort } from "./Quick";
export const SortNumbers: Sort<number>[] = [
  new BubbleSort(),
  new MergeSort(),
  new QuickSort(),
];
