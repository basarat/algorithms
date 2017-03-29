import { bubbleSort } from './bubbleSort';

test('sort already sorted array', () => {
  expect(bubbleSort([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4]);
});

test('sort array', () => {
  expect(bubbleSort([3, 2, 1, 4]))
    .toEqual([1, 2, 3, 4]);
});
