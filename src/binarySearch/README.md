# Binary Search Algorithm
> Binary search is a very fundamental algorithm in Computer Science. It power BST (binary search trees) which for the basis of modern databases and immutable data structures. In this lesson we look at the core Binary Search Algorithm describing the problem it solves.

* We start of by writing a function that takes an array of numbers and an element we have to find.
* The function should return the index of the element if its found.
* If the element is not found we can simply return -1
```js
/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */
export function binarySearch(array: number[], element: number): number {
  return -1;
}
```

* Now to search for the element, one way to do that is to simply loop through all the elements till some element in the array matches the element we are searching for.
* If it matches we return the index.
```js
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) return index;
  }
```
* In the worst case the time complexity of this algorithm is O(n).
* If we were to use the simple array prototype findIndex function
