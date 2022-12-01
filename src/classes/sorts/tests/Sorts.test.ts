import { SortNumbers } from "../_export";

interface testCases {
  [name: string]: testCase;
}

interface testCase {
  test: number[];
  expected: number[];
}

const tests: testCases = {
  empty: { test: [], expected: [] },
  ordered: { test: [0, 1, 2, 3, 4, 5, 6], expected: [0, 1, 2, 3, 4, 5, 6] },
  reverseOrder: {
    test: [6, 5, 4, 3, 2, 1, 0],
    expected: [0, 1, 2, 3, 4, 5, 6],
  },
  negative: {
    test: [-1, -4, -5, -3, -3],
    expected: [-5, -4, -3, -3, -1],
  },
  random: {
    test: [6, 2, -1, 3, 9, 2],
    expected: [-1, 2, 2, 3, 6, 9],
  },
};

function compare(a: number, b: number) {
  return a - b;
}

for (const sort of SortNumbers) {
  for (const name in tests) {
    const testCase = tests[name];
    test(`Sorting: ${name} with ${sort.name}`, () => {
      expect(sort.sort(testCase.test, compare)).toEqual(testCase.expected);
    });
  }
}
