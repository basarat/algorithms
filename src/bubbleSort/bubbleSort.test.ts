import { bubbleSort } from './bubbleSort';

test('sort already sorted array', () => {
  expect([1, 2, 3, 4]).toMatchSnapshot();
});

test('sort array', () => {
  expect([3, 2, 1, 4]).toMatchSnapshot();
});
