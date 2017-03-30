import { bubbleSortConcept, bubbleSort } from './bubbleSort';

test('concept 1', () => {
  expect(bubbleSortConcept([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4]);
});

test('concept 2', () => {
  expect(bubbleSortConcept([3, 2, 1, 4]))
    .toEqual([1, 2, 3, 4]);
});

test('final 1', () => {
  expect(bubbleSort([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4]);
});

test('final 2', () => {
  expect(bubbleSort([3, 2, 1, 4]))
    .toEqual([1, 2, 3, 4]);
});
