import { Sort } from "./BaseSort";
import { BubbleSort } from "./Bubble";
import { MergeSort } from "./Merge";
import { QuickSort } from "./Quick";
import { SelectionSort } from "./SelectionSort";

export const SortNumbers: Sort<number>[] = [
  new BubbleSort(),
  new MergeSort(),
  new QuickSort(),
  new SelectionSort(),
];
