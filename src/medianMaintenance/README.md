# Median Maintenance algorithm implementation using TypeScript / JavaScript

> The median maintenance problem is a common programming challenge presented in software engineering job interviews.

> In this lesson we cover an example of how this problem might be presented and what your chain of thought should be to tackle this problem efficiently.


Lets first refresh what is a median

* The median is the middle element in the sorted list
* Given a list of numbers

```js
`
The median is the middle element in the sorted list.

Given
13, 23, 11, 16, 15, 10, 26

Sort them
10, 11, 13, 15, 16, 23, 26
            ↑
         Median

If we have an even number of elements we average

E.g.
10, 11, 13, 15, 16, 23, 26, 32
            \    /
             15.5
`
```

***Delete all***
The median maintenance problem is also called the 'continuous median' problem.
* You are given numbers one by one and at each point you have to find the new median of all the numbers you have seen so far

```js
`
4
median = 4

4 6
median = 5

4 6 3
median = 4

... so on
`
```

* A naïve solution would be to track numbers internally as a sorted array, and at each new addition, put the new number in its rightful place.

***Delete all***
* Lets code it up,
* We create a class that will maintain the sorted array as data.
* The add method takes a new item and inserts it into a sorted position inside the data array same as we did for the naïve solution of the min / max maintenance algorithm.
  * At the end of any insertion, it returns the median.
* Within the median method we simply check if the number of items is even. If so we simply return the average of the two middle elements
  * Otherwise we simply return the middle element.

```js
/**
 * Keeps a running account of the median
 */
export class MedianMaintenanceArray {
  private data: number[] = [];

  /**
   * Adds a number to the internal storage, and returns the new median
   * O(n)
   */
  add(item: number): number {
    for (let index = 0; index < this.data.length; index++) {
      if (item < this.data[index]) {
        this.data.splice(index, 0, item);
        return this.median();
      }
    }
    this.data.push(item);
    return this.median();
  }

  /** Returns median in O(1) */
  private median() {
    if (this.data.length % 2 == 0) {
      const middle2 = this.data.length / 2;
      const middle1 = middle2 - 1;
      return (this.data[middle1] + this.data[middle2]) / 2;
    }
    else {
      const middle = Math.floor(this.data.length / 2);
      return this.data[middle];
    }
  }
}
```

***Select the add method***
Since the add method needs to potentially loop through all the existing elements it takes `O(n)` time.

We can do better. The trick is very similar to what we did for minimum and maximum maintenance.

* This time, we use two heaps instead of one. One heap to maintain the lower set of elements and one heap to maintain the larger set of elements.
* The `peek` method of the smaller MaxHeap will give us the n/2th smallest item, and peeking into the root of the big item's MinHeap will give us the n/2th largest element.
* The median is simply the value among these two roots.

```js
`
(n/2 ± 1) smallest items in a low MaxHeap       (n/2 ± 1) biggest items in a high MinHeap

        peek => n/2th smallest                     peek => n/2th smallest
                           \                        /
                                    MEDIAN!
`
```
***Delete everything***
Lets code it up.
* We bring in our heap data structure
* Create a class to maintain these heaps
* Add a method to add an item.
* If there are no items in the low heap or the item is smaller than its root, then it belongs in the low heap, otherwise it goes into the high heap.
* Now the number of items in the two heaps might be imbalanced. We simply determine which of the heaps is bigger if any. And if one of these is bigger by more than 1 value we simply balance them by add to the smaller heap, the root of the bigger heap.
* Finally we calculate the new median. If the heaps are of equal size, it means we have an even number of elements and the median is simply the average of the roots of the two heaps.
* Otherwise its simply the root of the heap that has more elements.

```js
import { Heap } from '../heap/heap';
/**
 * Keeps account of medians using heaps
 */
export class MedianMaintenanceHeap {
  private lowMaxHeap = new Heap<number>((b, a) => a - b);
  private highMinHeap = new Heap<number>((a, b) => a - b);

  /**
   * Adds a number to the internal storage, and returns the new median
   * O(log n)
   */
  add(item: number): number {
    /** Add to correct heap */
    if (this.lowMaxHeap.size() == 0 || item < this.lowMaxHeap.peek()) {
      this.lowMaxHeap.add(item);
    }
    else {
      this.highMinHeap.add(item);
    }

    /** Rebalance */
    const biggerHeap = this.lowMaxHeap.size() > this.highMinHeap.size()
      ? this.lowMaxHeap
      : this.highMinHeap;
    const smallerHeap = biggerHeap === this.lowMaxHeap ? this.lowMaxHeap : this.lowMaxHeap;

    if ((biggerHeap.size() - smallerHeap.size()) > 1) {
      smallerHeap.add(biggerHeap.extractRoot());
    }

    /** Return the median */
    if (this.lowMaxHeap.size() === this.highMinHeap.size()) {
      return (this.lowMaxHeap.peek() + this.highMinHeap.peek()) / 2;
    }
    else {
      return this.lowMaxHeap.size() > this.highMinHeap.size()
        ? this.lowMaxHeap.peek()
        : this.highMinHeap.peek();
    }
  }
}
```

***Select the add method***
* Since the only complex operations now are direct calls to our heap's add and extractRoot methods, we can do this in `O (log n)` time.

* Lets test our algorithm with a quick example.
```js
const maintain = new MedianMaintenanceHeap();
console.log(maintain.add(4)); // 4
console.log(maintain.add(6)); // 5
console.log(maintain.add(3)); // 4
```
***Run the demo***
And you can see it works as expected.
