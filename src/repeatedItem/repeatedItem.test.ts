import { repeatedItemLoops, repeatedItem } from './repeatedItem';

test('repeatedItemLoops', () => {
  expect(() => repeatedItemLoops([1, 2, 3])).toThrowError();
  expect(repeatedItemLoops([1, 2, 2])).toBe(2);
});

test('repeatedItem', () => {
  expect(() => repeatedItem([1, 2, 3])).toThrowError();
  expect(repeatedItem([1, 2, 2])).toBe(2);
});
