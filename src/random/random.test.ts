import { randomInt } from './random';

test("Should not include ceiling", () => {
  const res = [];
  for (let index = 0; index < 100; index++) {
    res.push(randomInt(0, 5));
  }
  expect(res.some(x => x === 5)).toBeFalsy();
});

test("Should include one before ceiling", () => {
  const res = [];
  for (let index = 0; index < 100; index++) {
    res.push(randomInt(0, 5));
  }
  expect(res.some(x => x === 4)).toBeTruthy();
});
