import { binarySearch } from './binarySearch';

test('should find', () => {
  const index = binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
  expect(index).toBe(3);
});

test('should not find', () => {
  const index = binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
  expect(index).toBe(-1);
});
