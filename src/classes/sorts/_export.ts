import { Sort } from "./BaseSort";
import { BubbleSort } from "./Bubble";
import { MergeSort } from "./Merge";
import { QuickSort } from "./Quick";
import { SelectionSort } from "./Selection";
import { InsertionSort } from "./Insertion";

// Any sorting algorithms added here will be tested by jest
export const SortNumbers: Sort<number>[] = [
  new BubbleSort(),
  new MergeSort(),
  new QuickSort(),
  new SelectionSort(),
  new InsertionSort(),
];
