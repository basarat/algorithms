import { maximumSubarray } from './maximumSubarray';

const expectations = new Map<number[], number>([
  [[3, 3, 3, -2, 4, 5, -4], 3 + 3 + 3 - 2 + 4 + 5],
  [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 4 + -1 + 2 + 1]
]);

test('maximumSubArray to work', () => {
  for (const [input, output] of expectations) {
    expect(maximumSubarray(input)).toBe(output);
  }
});
