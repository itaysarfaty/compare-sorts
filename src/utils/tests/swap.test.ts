import { swap } from "../swap";

const testArray = [0, 1];

test("Swap items in array", () => {
  swap(testArray, 0, 1);
  expect(testArray).toEqual([1, 0]);
});
