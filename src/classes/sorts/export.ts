import { Sort } from "./BaseSort";
import { BubbleSort } from "./Bubble";
import { MergeSort } from "./Merge";
export const SortNumbers: Sort<number>[] = [new BubbleSort(), new MergeSort()];
