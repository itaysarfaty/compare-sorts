import { Sort } from "./BaseSort";
import { BubbleSort } from "./Bubble";
import { MergeSort } from "./Merge";
import { QuickSort } from "./Quick";
import { SelectionSort } from "./Selection";
import { InsertionSort } from "./Insertion";

export const SortNumbers: Sort<number>[] = [
  new BubbleSort(),
  new MergeSort(),
  new QuickSort(),
  new SelectionSort(),
  new InsertionSort(),
];
