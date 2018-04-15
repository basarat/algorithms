/**
 * Given an array of `n` numbers
 * return a contiguous subarray that has the largest sum
 */
export function maximumSubArray(arr: number[]): number {
  if (!arr.length) return 0;

  let maxEndingHere = arr[0], maxSoFar = arr[0];
  for (let index = 0; index < arr.length; index++) {
    const x = arr[index];
    maxEndingHere = Math.max(x, maxEndingHere + x);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
