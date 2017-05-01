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

* Lets go ahead and write this partitioning function, it will take an array, the start index of the array section that it needs to partition, and the upper limit of the index for the partitioning.

* Since it modifies the array in place it doesn't need to return anything.

```js
/**
 * Partitions the [start, before) indexes of the array
 */
function partition(array: number[], start: number, before: number): void {
}
```
* The quicksort algorithm is also called partition sort *because of this partitioning routine*.

* This partition routine is recursive, and like any recursive function it will have a base case that terminates the recursion. For sorting you can abort if the length of the partition is less than or equal to 1, as an array of 1 item is already sorted.

```js
  const length = before - start;
  if (length <= 1) return;
```

* The objective in each recursive iteration is to select a `pivot` element, and move the items in the array such that the array satisfies the following property. (items less than the pivot appear before the pivot, and items greater than the pivot appear after the pivot)
```js
// [
//  items less than pivot,
//  pivot,
//  items greater than pivot,
// ]
```
The quicksort algorithm is also called `pivot` sort due to this partitioning around a pivot.

* There are few ways to select the pivot. We just go ahead and select a random index from the array subsection that was passed in.
* To make the remaining algorithm easier, we move the item at this index to the start of the array. This way we don't need to keep moving the pivot to its rightful place when we are iterating through the elements in the array subsection.
```js
const pivotIndex = start + Math.floor(Math.random() * length);
[array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
```

* This first element is our pivot.
* We start off by assuming that it is already in its rightful place in the array and store that as the pivotRank.
```js
const pivot = array[start];
let pivotRank = start;
```

* We will loop through items in the array subsection maintaining the following invariant
```js
[
  items less than pivot,
  - index for pivot rank,
  items greater than pivot,
  - index for current item,
  remaining items we have yet to see,
]
```

* Now lets loop through the array subsection with these invariants in mind.
* We end the loop before index reaches the before point.
* We start the loop at start+1 as our pivot is at the start position.
* If the item at the current index is less than the pivot, then we
  - increase the pivot rank.
  - slide this smaller element, into the section of the array that holds items less than pivot. We can do this sliding by simply moving the item at the pivotRank to the current index. This is because the item at this *incremented* pivot rank should be greater than the pivot.
  After this sliding the item at the pivot rank is smaller than the pivot, which is one of the invariants we are maintaining.
* If the item is greater than pivot then we just keep on looping without any changes to pivotRank.
```js
for (let index = start + 1; index < before; index++) {
  if (array[index] < pivot) {
    pivotRank++;
    [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
  }
}
```
* By the time the loop terminates we have met our invariant, expect that now there are no more remaining items to see.

```js
[
  items less than pivot,
  - index for pivot rank,
  items greater than pivot,
  - index for current item,
]
```
* Now we need to move the pivot to be between the items that are less than and great than.
* If the pivotRank didn't change in the loop, then the pivot is already in its rightful place at the start of the array subsection.
* If the pivotRank changed during our loop, we can simply put the pivot into its rightful place by swapping it with the element at the current pivotRank. This is because any item at the pivot rank is definitely smaller than pivot because of our swaps within the loop.
```js
  if (pivotRank !== start) {
    [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
  }
```
* After putting the pivot at its rightful place, the array subsection has been partitioned into
```js
[
  items less than pivot,
  pivot,
  items greater than pivot,
]
```
* Notice that in each call to partition, not only are we putting the pivot in its rightful place, but more importantly we are dividing the problem into two smaller problems that can be tackled independently. Items less than the pivot can be sorted independent of the items greater than the pivot. We can do this sorting by recursively calling the partition routine on the items less than and items greater than the pivot.
```js
partition(array, start, pivotRank);
partition(array, pivotRank + 1, before);
```

* The reason why the algorithm is named quick, is because of its very low memory overhead since we are doing the partitioning in place one by one.
* At a high level, randomly selecting a pivot, gives us pivot that is in the 25% to 75% rank in a given set of elements, at about half the times. This gives us a fairly consistent decreasing problem size, which brings quicksort's average runtime to O(n log n) similar to merge sort.
