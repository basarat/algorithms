# Quicksort algorithm using TypeScript
> Quicksort (also called partition sort and pivot sort) is arguably the most used sorting algorithm. It is the one commonly implemented internally in language runtimes. In this lesson we cover the quick sort algorithm, why is it called *quick* and how to implement it using TypeScript / JavaScript.

* We start off by creating a function that takes an array of numbers and will return a sorted array of numbers.

```js
/**
 * Sorts an array using quick sort
 */
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
/**
 * Partions the [low - to - high] indexes of the array.
 */
function partition(array: number[], start: number, before: number): void {
}
```

* This partition routine is a recursive, and like any recursive function it will have a base case that terminates the recursion. For sorting you can abort if the length of the partition is less than or equal to 1, as an array of 1 item is already sorted.

```js
  const length = before - start;
  if (length <= 1) return;
```

* The quicksort algorithm is also called partition sort *because of this partitioning routine*.

* The objective is each recursive iteration is to select a `pivot` element, and move the items in the array such that the array satisfies the following property.
```js
[items less than pivot, pivot, items greater than pivot]
```
The quicksort algorithm is also called `pivot` sort due to this partitioning around a pivot.

* We go ahead and select a random index from the array subsection.
* We move the item at this index to the start of the array.
```js
const pivotIndex = start + Math.floor(Math.random() * length);
[array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
```

* This first element is our pivot.
* We start off by assuming that it is already in its rightful place in the array.
```js
const pivot = array[start];
let pivotRank = start;
```

* We will loop through items in the array maintaining the following invariant
```js
[
  items less than pivot,
  - index for pivot rank,
  items greater than pivot,
  - index for current item,
  remaining items we have yet to see
]
```

* Lets loop through this array section.
* We start the loop at start+1 as our pivot is at the start position.
* If the item at the current index is less than the pivot, then we
  - increase the pivot rank.
  - slide this smaller element into the items less than pivot section of the array
* If the item is greater than pivot then we just keep on looping.
```js
for (let index = start + 1; index < before; index++) {
  if (array[index] < pivot) {
    pivotRank++;
    [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
  }
}
```
* By the time the loop terminates we have met our invariant, expect that now there are no more items to see.

```js
[
  items less than pivot,
  - index for pivot rank,
  items greater than pivot,
  - index for current item,
]
```
* If the pivotRank changed, we can simply put the pivot into its rightful place. Any item at the pivot rank is definitely smaller than pivot and its safe to move it to the start.
```js
  if (pivotRank !== start) {
    [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
  }
```
* In each call to partition, not only are we putting the pivot in its rightful place, but more importantly we are dividing the problem into two smaller problems that can be tackled independently.
```js
[
  items less than pivot,
  - index for pivot rank,
  pivot,
  items greater than pivot,
  - index for current item,
]
```
* We can now partition these less than pivot elements of the array
* And the greater than pivot elements of the array
* independently as recursive subproblems of smaller size.
```js
partition(array, start, pivotRank);
partition(array, pivotRank + 1, before);
```

* The reason why its called quick is because of its very low memory overhead since we are doing the sorting in place.
* At a high level, randomly selecting the pivot gives a pivot that is in the 25% to 75% position in a given set of elements at about half the times. This gives us a fairly consistently decreasing problem size which brings it to an average runtime of O(n log n) similar to merge sort.
