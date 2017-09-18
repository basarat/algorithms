# Heapsort algorithm using TypeScript
> Once you are familiar with the Heap data structure a number of programming challenges can magically become super simple. Sorting is just one of those challenges.

> In this lesson we cover the heap sort algorithm, why is it called *heap* sort and how to implement it using JavaScript / TypeScript.

* Consider a simple array of items `9 4 2 7 5 3`
* Our task is to sort these in ascending order. We can simplify this to simply repeatedly extracing the minimum item from a set.
* If we do that we get the sorted result `2 3 4 5 7 9`

```
9 4 2 7 5 3

sort => repeated minium extraction

2 3 4 5 7 9
```

We already know an amazing data structure that is great for the specific problem of repeated minimum computations. Its called the Heap.

* We simply bring in the heap and compare fun definition from the code we wrote in our heap lesson.
* We start off by creating a heapSort function that takes an array of type T, along with a comparison function, and simply returns the sorted array.
* We create a heap based on the comparison function
* Next we push each items into the heap.
* We prepare the result array.
* Loop `n` times extracting the root from the heap.
* And return the result, and thats it.

```js
import { Heap, CompareFn } from '../heap/heap';

/**
 * Sorts an array using heap sort
 */
export function heapSort<T>(array: T[], cmp: CompareFn<T>): T[] {
  const heap = new Heap(cmp);
  for (const item of array) {
    heap.add(item);
  }
  const result: T[] = [];
  for (let index = 0; index < array.length; index++) {
    result.push(heap.extractRoot());
  }
  return result;
}
```

TODO: example, runtime complexity
