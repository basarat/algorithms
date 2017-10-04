# Median Maintenance algorithm implementation using TypeScript / JavaScript

> The median maintenance problem is a common programming challenge presented in software engineering job interviews

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

If we have an even number of elements you average

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
m = 4

4 6
m = 5

4 6 3
m = 4

... so on
`
```

* A naieve solution would be to track numbers internally as a sorted array, and at each new addition, put the new number in its rightful place.

***Delete all***
* Lets code it up,

```js
/**
 * Keeps a running account of the median
 */
export class MedianMaintenanceArray {
  data: number[] = [];

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

* This time, we use two heaps, one to maintain the lower set of elements and one to maintain the larger set of elements.
* The peek into the smaller MaxHeap will give us the n/2th smallest item, and peeking into the root of the big item's MinHeap will give us the n/2th largest element.
* The median is simply the value among these two roots.
* At each new item insertion we simply maintain the invariant that the items are equally distributed between the low heap and the high heap which we can simply do by comparing the new value against the roots of these heaps.

```js
`
n / 2 smallest items in a low MaxHeap       n / 2 biggest items in a high MinHeap

    peek => n/2 th smallest                     peek => n/2 + 1 th smallest
                         \                       /
                                  MEDIAN!
`
```
* Lets code it up.


### TODO
* https://www.youtube.com/watch?v=VmogG01IjYc

Two heaps, one low max-heap and one high min-heap. Keep evenly distributed e.g for 20 items, Lowest 10 in H-low and Highest 10 in H-high. For odd you can put in either, lets put in H-low.

```js
H(low)  and  H(high)
```

The median is
- if (even `low.peek()` `high.peak()`) else (`low.peek()`).

At point 21 we have

```js
  H-low            H-high
11 lowest        10 largest
```

For insertion we simply check
- if new <= low.peak() belongs in low
- else belongs in high

But we need to fix the imbalance if it goes into `low`, We simply rebalnce by extract max from low heap and put in high heap.
