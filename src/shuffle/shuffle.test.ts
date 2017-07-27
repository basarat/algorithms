import { shuffle } from './shuffle';

test("Should change a few indexes", () => {
  const orig = new Array(10).fill('').map((x, i) => i);
  const shuffled = shuffle(orig);
  expect(orig.some((k, i) => k !== shuffled[i])).toBeTruthy();
});
