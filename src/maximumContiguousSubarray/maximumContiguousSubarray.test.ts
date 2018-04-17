import { maximumContiguousSubarray } from './maximumContiguousSubarray';

const expectations = new Map<number[], number[]>([
  [
    [],
    []
  ],
  [
    [-2],
    [-2]
  ],
  [
    [-2, 1],
    [1]
  ],
  [
    [-2, 1, -3],
    [1]
  ],
  [
    [-2, 1, -3, 4],
    [4]
  ],
  [
    [-2, 1, -3, 4, -1],
    [4]
  ],
  [
    [-2, 1, -3, 4, -1, 2],
    [4, -1 , 2]
  ],
  [
    [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    [4, -1, 2, 1]
  ]
]);

test('maximumContiguousSubarray to work', () => {
  for (const [input, output] of expectations) {
    const result = maximumContiguousSubarray(input);
    expect(result).toEqual(output);
  }
});
