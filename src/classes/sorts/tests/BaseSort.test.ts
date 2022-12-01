import { ICompareFn } from "../../../interfaces/ICompareFn";
import { dummyCollection } from "../../collections/tests/BaseCollection.test";
import { Sort } from "../BaseSort";

const trialBound = { min: 1, max: 10 };

export class DummySort<T> extends Sort<T> {
  constructor() {
    super("Dummy Sort", trialBound);
  }

  sort(array: T[], compare: ICompareFn<T>): T[] {
    return array;
  }
}

const dummySort = new DummySort<number>();

test("Sort trials too small", () => {
  try {
    dummySort.getResult(
      dummyCollection.array,
      dummyCollection.compare,
      trialBound.min - 1
    );
  } catch (err) {
    if (err instanceof Error) {
      expect(err.message).toEqual(
        `Number of trials must be between ${trialBound.min} and ${trialBound.max}`
      );
    }
  }
});

test("Sort trials too large", () => {
  try {
    dummySort.getResult(
      dummyCollection.array,
      dummyCollection.compare,
      trialBound.max + 1
    );
  } catch (err) {
    if (err instanceof Error) {
      expect(err.message).toEqual(
        `Number of trials must be between ${trialBound.min} and ${trialBound.max}`
      );
    }
  }
});

test("Sort results", () => {
  const result = dummySort.getResult(
    dummyCollection.array,
    dummyCollection.compare,
    3
  );

  expect(result.name).toEqual("Dummy Sort");
  expect(result.msec).not.toBeNaN();
});
