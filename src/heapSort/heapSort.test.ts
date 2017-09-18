import { heapSort } from './heapSort';

test('heapSort', () => {
  const cmp = (a, b) => a - b;
  expect(heapSort([1, 2, 3, 4], cmp))
    .toEqual([1, 2, 3, 4]);
  expect(heapSort([3, 2, 1, 4], cmp))
    .toEqual([1, 2, 3, 4]);
});
