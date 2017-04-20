# Bubble sort using TypeScript
> Bubble sort is considered the simplest sorting algorithm to implement.

> In this lesson we cover the bubble sort algorithm, how it gets its name, and how to implement it using TypeScript / JavaScript.

* First we will go ahead and create a simple sorting function that explains the concept of bubble sort.
* The function takes an array of numbers as an argument and will return a sorted array of numbers.
* Within the function we create a copy of the original array using `slice`.
* And return this array.
* Before returning it we will sort it using bubble sort.
* Bubble sort works by looping over the input array n times
* In each iteration the goal is to *Bubble* the highest ranking value to the end
  * So we loop through all the items in the array
  * We simply check if the current value on the left is greater than the current value on the right.
  * If so we swap the variables at the two positions.
  * This ensures that we keep bubbling the highest value to the last position of the array.
* Since we are looking up the j+1 item it makes obvious sense to terminate the inner loop 1 before the last index.

```js
/**
 * Explains the bubble sort concept
 */
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
* We will sort the array [4,3,2,1]. We expect the final result to be 1,2,3,4.
* Within the function we will log out the original array
* And also log out the array whenever we do a swap.
* Now if we run this, you can see
  * 4 bubbling to the end of the array
  * Then 3,
  * and finally 2
* This explains the concept of bubble sort and how it gets its name.
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

Note that instead of always iterating n times we can easily optimize the algorithm to terminate early.

***Duplicate the function and call it `bubbleSort`***
* Lets duplicate the function to present a more idiomatic bubbleSort implementation.

```js
/**
 * Idiomatic bubble sort implementation
 */
export function bubbleSort(array: number[]): number[] {
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
* We get rid of this always n times iterating outer loop.
***let swapped = false;***
* We create a variable to track if any bubbling  takes place.
***in if swapped = true***
* And note it down whenever we swap a variable
***if (!swapped) break;***
* And break out once no more swapping is needed.
***while(true)***
* And finally wrap the whole thing in a while loop that will terminate if no variable bubbling happens in an iteration.

This implementation is similar to the previous one with a simple addition of early termination. This also explains the main real world use case of bubble sort, which is, if you only have a few values that need to be swapped around, bubble sort can be pretty fast.

***Select the inner for loop***
* In the worst case this whole inner for loop of n iterations will run O of n times resulting in a time complexity of O n squared.
* Since we are doing the array swaps in place the space complexity is O(n).
