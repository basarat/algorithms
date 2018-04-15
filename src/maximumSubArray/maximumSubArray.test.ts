import { maximumSubArray } from './maximumSubArray';

test('maximumSubArray to work', () => {
  expect(
    maximumSubArray([-3, 3, 3, -2, 4, 5, -4])
  )
    .toBe(
      3 + 3 - 2 + 4 + 5
    );
});
