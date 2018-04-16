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
  let maxStartIndex = 0;
  let maxEndIndex = 0;
  let result = [];

  for (let i = 1; i < array.length; i += 1) {
    const element = array[i];

    maxEndingHere = Math.max(element, maxEndingHere + element);
    if (maxEndingHere === element) {
      maxStartIndex = i;
    }

    maxSoFar = Math.max(maxSoFar, maxEndingHere);
    if (maxSoFar === maxEndingHere) {
      maxEndIndex = i;
    }
  }

  return {
    max: maxSoFar,
    array: array.slice(maxStartIndex, maxEndIndex + 1)
  };
}

// console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // DEBUG
