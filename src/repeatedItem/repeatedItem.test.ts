import { repeatedItem } from './repeatedItem';

test('repeatedItem', () => {
  expect(() => repeatedItem([1, 2, 3])).toThrowError();
  expect(repeatedItem([1, 2, 2])).toBe(2);
});
