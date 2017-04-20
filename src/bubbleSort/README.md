# Bubble sort using TypeScript
> Bubble sort is considered the simplest sorting algorithm to implement.

> In this lesson we cover the bubble sort algorithm, how it gets its name, and how to implement it using TypeScript / JavaScript.

* We will go ahead and create a sorting function for bubble sort.
* First we create a copy of the original array using `slice`.
* And return this array.
* Before returning it we will sort it using bubble sort.
* Bubble sort works by looping over the input array n times
* In each iteration the goal is to *Bubble* the highest ranking value to the end
  * So we loop through all the items in the array
  * In each iteration we simply check if the current value on the left is greater than the current value on the right.
* If so we swap the two variable positions
* Since we are looking up the j+1 item it makes obvious sense to terminate the inner loop 1 before the last index.

```js
export function bubbleSortConcept(array: number[]): number[] {
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

* To demonstrate this bubbling of the highest value lets run through a simple example.
* We will sort the array [4,3,2,1].
* Within the function we will log out the original array
* And also log out the array whenever we do a swap.
* Now if we run this, you can see
  * 4 bubbling to the end of the array
  * Then 3,
  * and finally 2
* This explains the concept of bubble sort.
```js
export function bubbleSortConcept(array: number[]): number[] {
  array = array.slice();
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array);
      }
    }
  }
  return array;
}
bubbleSortConcept([4, 3, 2, 1]);
```

Note that we can easily optimize the algorithm to remove redundancies.
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
* In the worst case this whole inner for loop of n iterations will run O of n times resulting in a time complexity of O n times n i.e. O(n^2).
* Since we are doing the array swaps in place the space complexity is O(n).
