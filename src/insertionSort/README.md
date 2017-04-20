# Insertion sort using TypeScript
> Insertion sort is a very intutive algorithm as humans use this pattern naturally when sorting cards in their hands.

> In this lesson we cover the insertion sort algorithm, how it gets its name, and how to implement it using TypeScript / JavaScript.

* We will go ahead and create a sorting function for insertion sort that takes a number array and returns a sorted number array.
* Before we begin we create a copy of the original array using `slice`.
* We will return this array after sorting it in place.
```js
/**
 * Sorts an array using insertion sort
 */
export function insertionSort(array: number[]): number[] {
  array = array.slice();
  return array;
}
```

* The basic idea of insertion sort is to mentally divide the array into a sorted left section and an unsorted right section, moving an item 1 by 1 from the unsorted right section into its rightful place in the sorted right section.
```
/**
 * unsorted sorted
 *        <=
 */
```

The code follows a similar pattern.
```js
export function insertionSort(
  array: number[]
): number[] {
  array = array.slice();
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```
***for (let i = 1; i < array.length; i++) {***
* We loop through all the items in the array skipping the first one as a single item is already sorted.
***const current = array[i];***
* We select the current array item.
* Storing the item in a `current` variable opens up a hole at the ith position in the array that we can use to slide items one by one  if they are bigger than the current item.

***let j = i - 1;***
* Our goal is to keep sliding items till we find the rightful place for the current item among the sorted items in the left. We will use `j` to keep track of which item we are comparing `current` against.

***while (j >= 0 && array[j] > current) {***
* We will continue to do comparison till we arrive the head of the array *or* the item at the jth position is bigger than the current item.

***array[j + 1] = array[j];***
* Within the loop we will keep on sliding the item at jth position to the right ie. `j+1`th position.

***j--;***
* We will continue the loop to test against the next jth index

***array[j + 1] = current;***
Once the loop terminates `j` is either less then 0 i.e. has fallen off the start of the array, or it means that the item at j is smaller than the current item. In both these cases we should put the item at the j+1th position.
***Select the for loop***
Once the outer loop completes our sorted left section is equal to the whole array and each item has be placed into its rightful place on the left and hence the whole array is sorted.

To understand the algorithm a bit better lets look at an example:
```js
export function insertionSort(array: number[]): number[] {
  array = array.slice();
  console.log(array);
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    console.log({ section: array.slice(0, i), current });
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  console.log(array);
  return array;
}
insertionSort([4, 3, 2, 1]);
```
* We will sort the array [4,3,2,1]. We expect the final result to be 1,2,3,4.
* We will log out the array before sorting and after sorting
* We will also log out the section of the array we keep sorted and the current item we are going to place into that sorted subsection.
* You can see that we start with a single sorted item, and put 3 in its rightful place, Next we move 2 into its rightful place, and finally 1 into its rightful place.

The algorithm is called insertion sort. Because we insert the item one by one at its rightful place a sorted subsection of the array.

***Delete the log statements***
* I'll delete the log statements now.

***Select the while loop***
* In different iterations, for the worst case, the inner loop will run an increasing number of times
* This is summation you should be familiar with a result of n*n-1/2
* or O(n^2)
```js
1,2,3...n-1
n*n-1/2
O(n^2)
```
* Since we are doing the array item moves in place the space complexity is O(n).
