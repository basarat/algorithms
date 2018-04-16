/**
 * Given an array of `n` numbers
 * return a contiguous subarray that has the largest sum
 */
export function maximumSubarray(array: number[]): number[] {
  if (!array.length) {
    return [];
  }

  let maxAtCurrentIndex = array[0];

  let max = array[0];
  let maxStartIndex = 0;
  let maxEndIndex = 0;

  for (let i = 1; i < array.length; i += 1) {
    const element = array[i];

    maxAtCurrentIndex = Math.max(maxAtCurrentIndex + element, element);
    if (maxAtCurrentIndex === element) {
      maxStartIndex = i;
    }

    max = Math.max(max, maxAtCurrentIndex);
    if (max === maxAtCurrentIndex) {
      maxEndIndex = i;
    }
  }

  return array.slice(maxStartIndex, maxEndIndex + 1);
}

// console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // DEBUG