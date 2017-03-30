# Bubble sort using TypeScript
> In this lesson we cover the bubble sort algorithm, how it gets its name, and how to implement it using TypeScript.

* We will go ahead and create a sorting function for bubble sort.
* Bubble sort works by looping over the input array n times
* In each iteration the goal is to *Bubble* the highest ranking value to the end.
* To do this we simply check if the current value on the left is less than the current value on the right. 
* If so we swap the two variable positions

```js
export function bubbleSortConcept(
  array: number[]
): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
```
This explains the basic concept behind bubble sort. We can however optimize the algorithm to remove redundancies.

```js
export function bubbleSort(
  array: number[]
): number[] {
  while (true) {
    let swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}
```
* Instead of looping through the array n times we can simply try and bubble the biggest item (delete the outer for)
* If a bubbling is done at least once we note it down (swapped = true)
* And we continue doing this as long as there is some bubbling happening (`let swapped = false`, if(!swapped))

* In the worst case this inner loop will still run O of n times resulting in a time complexity of O n times n i.e. O(n^2).
* Since we are doing the array swaps in place the space complexity is O(n).
