import { insertionSort } from './insertionSort';

test('insertion concept 1', () => {
  expect(insertionSort([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4]);
});

test('insertion concept 2', () => {
  expect(insertionSort([3, 2, 1, 4]))
    .toEqual([1, 2, 3, 4]);
});
