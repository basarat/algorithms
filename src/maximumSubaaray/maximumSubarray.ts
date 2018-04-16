/**
 * Given an array of `n` numbers
 * return a contiguous subarray that has the largest sum
 */
export function maximumSubArray(array: number[]): number {
  if (!array.length) return 0;

  let maxEndingHere = array[0]
  let maxSoFar = array[0];

  for (let i = 1; i < array.length; i += 1) {
    const element = array[i];
    maxEndingHere = Math.max(0, maxEndingHere + element);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
