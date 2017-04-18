import { mergeSort } from './mergeSort';

test('mergeSort', () => {
  expect(mergeSort([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4]);
  expect(mergeSort([3, 2, 1, 4]))
    .toEqual([1, 2, 3, 4]);
});
