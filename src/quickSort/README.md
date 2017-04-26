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

* Since it modifies the array in place it doesn't need to return anything.

```js
function partition(array: number[], start: number, before: number): void {
}
```

* This partition routine is a recursive, and like any recursive function it will have a base case that terminates the recursion. For sorting you can abort if the lenght of the partition is less than or equal to 1, as an array of 1 item is already sorted.

```js
  const length = before - start;
  if (length <= 1) return;
```

* The quicksort algorithm is also called partition sort *because of this partitioning routine*.

* The objective is each recursive iteration is to select a `pivot` element, and move the items in the array such that the array satisfies the following property.

```
[items less than pivot, pivot, items greater than pivot]
```

* The quicksort algorithm is also called `pivot` sort due to this partitioning around a pivot.

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
* In each call to partition, not only are we putting the pivot in its rightful place, but more importantly we are diving the problem into two smaller problems that can be tackled independently.
* At a high level, randomly selecting the pivot gives a pivot that is in the 25% to 75% position in a given set of elements at about half the times. This gives us a fairly consistently decreasing problem size which brings it to an average runtime of O(n log n).

