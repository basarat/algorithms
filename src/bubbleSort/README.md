# Bubble sort using TypeScript
> In this lesson we cover the bubble sort algorithm, how it gets its name, and how to implement it using TypeScript / JavaScript.

* We will go ahead and create a sorting function for bubble sort.
* First we create a copy of the original array using `slice`.
* Bubble sort works by looping over the input array n times
* In each iteration the goal is to *Bubble* the highest ranking value to the end
  * So we loop through all the items in the array
  * In each iteration we simply check if the current value on the left is greater than the current value on the right. 
* If so we swap the two variable positions
* Finally we return the new sorted array

```js
export function bubbleSortConcept(
  array: number[]
): number[] {
  array = array.slice();
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
***Duplicate the function and call it `bubbleSort`***

```js
export function bubbleSort(
  array: number[]
): number[] {
  array = array.slice();
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
***delete the outer for***
* Instead of looping through the array n times we can simply try and bubble the biggest item.
***swapped = false;, in if swapped = true***
* If a bubbling is done at least once we note it down.
***while(true)***
* And we continue doing this as long as there is some bubbling happening
***if (!swapped) break;***
* And break out once no more swapping is needed.

This algorithm is similar to the previous one with a simple addition of early termination.

***Select the inner for loop***
* In the worst case this inner loop will still run O of n times resulting in a time complexity of O n times n i.e. O(n^2).
* Since we are doing the array swaps in place the space complexity is O(n).
