import { quickSort } from './quickSort';

test('quickSort', () => {
  expect(quickSort([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4]);
  expect(quickSort([3, 2, 1, 4]))
    .toEqual([1, 2, 3, 4]);
});
