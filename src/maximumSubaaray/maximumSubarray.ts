/**
 * Given an array of `n` numbers
 * return a contiguous subarray that has the largest sum
 */
export function maximumSubarray(array: number[]): {
  max: number,
  array: number[]
} {
  if (!array.length) {
    return { max: 0, array: [] };
  }

  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  let result = [];

  for (let i = 1; i < array.length; i += 1) {
    const element = array[i];
    maxEndingHere = Math.max(0, maxEndingHere + element);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return {
    max: maxSoFar,
    array: result
  };
}
