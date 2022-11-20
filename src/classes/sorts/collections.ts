import { Sort } from "./BaseSort";
import { BubbleSort } from "./Bubble";

export const SortNumbers: Sort<number>[] = [new BubbleSort()];
