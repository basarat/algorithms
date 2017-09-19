# Implement the Heapsort algorithm using TypeScript / JavaScript
> Once you are familiar with the Heap data structure, a number of programming challenges can magically become super simple. Sorting is just one of those challenges.

> In this lesson we cover the heap sort algorithm, why is it called *heap* sort and how to implement it using JavaScript / TypeScript.

* Consider a simple array of numbers `9 4 2 7 5 3`
* Our task is to sort these in ascending order. We can simplify this task as simple repeated extractions of the minimum item from the set.
* If we do that we get the sorted result `2 3 4 5 7 9` in ascending order.

```
`
9 4 2 7 5 3

sort => repeated minimum extraction

2 3 4 5 7 9
`
```

We already know an amazing data structure called the `heap` that is great for the specific problem of repeated minimum computations. Lets code up heapsort using the heap data structure.

* We start off by bring in the heap class and compare function from the code we wrote in our heap lesson.
* Next we create a heapSort function that takes an array of type T, along with a comparison function, and simply returns the sorted array.
* We create a heap based on the comparison function
* Next we push each items into the heap.
* We prepare the result array.
* Loop `n` times once more,
   * in each iteration we extract the root from the heap and push it onto the result.
* Finally we return the result, and that's it.

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

* Lets try it on our example.
* We simply console log out the result of heapSorting our example input array.
* As you can see it works as expected.
```js
console.log(heapSort([9, 4, 2, 7, 5, 3], (a, b) => a - b));
```

Now lets analyze the time complexity of our algorithm.
***Select the first loop***
* In our code we loop through the input array, and in each iteration we simply add an item into the heap, resulting in a time complexity of this section being `the complexity of the add operation which is logn`, times the number of iterations, which is `n`. So in total `nLogn`
***Select the second loop***
* In the second loop we call extractRoot `n` times. So time complexity is `n` times the complexity of `extractRoot`, so again the total for this section is `n` times `Logn`
* Therefore the total complexity of `heapSort` is of the order `nLogn`

***Select the `new Heap` call***
As you can see, simply using the heap data structure, has given us the best asymptotic time performance for comparison based sorting.
