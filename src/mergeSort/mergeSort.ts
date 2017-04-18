/**
 * Sorts and array using merge sort
 */
export function mergeSort(
  array: number[]
): number[] {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/** Merge (conquer) step of mergeSort */
function merge(left: number[], right: number[]): number[] {
  const array: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex + rightIndex < left.length + right.length) {
    const lItem = left[leftIndex];
    const rItem = right[rightIndex];
    if (lItem != null && rItem != null) {
      if (lItem < rItem) {
        array.push(lItem);
        leftIndex++;
      }
      else {
        array.push(rItem);
        rightIndex++;
      }
    }
    else if (lItem == null) {
      array.push(rItem);
      rightIndex++;
    }
    else {
      array.push(lItem);
      leftIndex++;
    }
  }
  return array;
}
