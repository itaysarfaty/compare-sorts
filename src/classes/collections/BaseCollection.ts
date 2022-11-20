export abstract class Collection<T> {
  protected collection: T[];
  protected min: number;
  protected max: number;

  get array() {
    return this.collection;
  }

  get size() {
    return this.collection.length;
  }

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
    this.collection = this.generate(min);
  }

  abstract generate(size: number): T[];
  abstract compare(a: T, b: T): number;

  public new(size: number) {
    if (size < this.min || size > this.max) {
      throw new Error(`Size must be between ${this.min} and ${this.max}`);
    }
    this.collection = this.generate(size);
  }
}
