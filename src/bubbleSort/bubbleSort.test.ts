import { bubbleSortConcept } from './bubbleSort';

test('sort already sorted array', () => {
  expect(bubbleSortConcept([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4]);
});

test('sort array', () => {
  expect(bubbleSortConcept([3, 2, 1, 4]))
    .toEqual([1, 2, 3, 4]);
});
