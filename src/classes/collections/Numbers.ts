import { Collection } from "./BaseCollection";

export class Numbers extends Collection<number> {
  constructor(min: number, max: number) {
    super(min, max);
  }

  public compare(a: number, b: number): number {
    return a - b;
  }

  public generate(size: number) {
    //stackoverflow.com/a/43044960
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
  }
}
