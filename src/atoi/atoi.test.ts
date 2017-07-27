import { atoi } from './atoi';

test('basic', () => {
  expect(atoi('123')).toBe(123);
  expect(atoi('-1123')).toBe(-1123);
});
