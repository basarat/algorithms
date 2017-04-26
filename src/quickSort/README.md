# Quicksort algorithm using TypeScript
> Quicksort (also called partition sort and pivot sort) is arguably the most used sorting algorithm. It is the one commonly implemented internally in language runtimes. In this lesson we cover the quick sort algorithm, why is it called *quick* and how to implement it using TypeScript / JavaScript.

* We start off by creating a function that takes an array of numbers and will return a sorted array of numbers.

```js
export function quickSort(array: number[]): number[] {
  array = array.slice();

  return array;
}
```
* Within the function we create a copy of the original array using `slice`.
* And return this array.
* Before returning it we will sort it using a recursive partitioning routine.

```js
  partition(array, 0, array.length);
```

* Lets go ahead and write this partitioning function, it will take an array, the start index of the array section that it needs to partition, and the upper limit of the index.


* Partition an array around a pivot element.

* We will loop through items in the array maintaning the following invariant

```
[
  items less than pivot, - index for pivot rank,
  items greater than pivot
  - index for item we are going to see
]
```

  /** TODO */
  /** Partition around the pivot so that [less]pivot[more] in the original array */

* The reason why its called quick is because of its very low memory overhead since we are doing the sorting in place.
* At a high level, randomly selecting the pivot gives a pivot that is in the 25% to 75% position in a given set of elements at about half the times. This gives us a fairly consistently decreasing problem size which brings it to an average runtime of O(n log n).

