import { Collection } from "./BaseCollection";

class DummyCollection extends Collection<number> {
  constructor(min: number, max: number) {
    super(min, max);
  }
  public compare(a: number, b: number): number {
    return a - b;
  }
  public generate(size: number) {
    return Array.from({ length: size }, (_, index) => index);
  }
}

const minSize = 1;
const maxSize = 10;
const dummyCollection = new DummyCollection(minSize, maxSize);

test("Generate new collection", () => {
  dummyCollection.new(5);
  expect(dummyCollection.array).toEqual([0, 1, 2, 3, 4]);
});

test("Collection too small", () => {
  try {
    dummyCollection.new(0);
  } catch (error) {
    if (error instanceof Error) {
      expect(error.message).toBe(
        `Size must be between ${minSize} and ${maxSize}`
      );
    }
  }
});

test("Collection too large", () => {
  try {
    dummyCollection.new(6);
  } catch (error) {
    if (error instanceof Error) {
      expect(error.message).toBe(
        `Size must be between ${minSize} and ${maxSize}`
      );
    }
  }
});
