export class Collection {
  private array: number[];
  private minSize = 1000;

  get numbers() {
    return this.array;
  }

  get size() {
    return this.array.length;
  }

  constructor(size: number = 1000) {
    this.array = this.generateArray(size);
  }

  public new(size: number) {
    if (size < this.minSize) {
      throw new Error(`Too small! Min size: ${this.minSize}`);
    }
    this.array = this.generateArray(size);
  }

  private generateArray(size: number) {
    //stackoverflow.com/a/43044960
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
  }
}
