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

* A naieve solution would be to track numbers internally as a sorted array, and at each new insertion put the number in its rightful place.

***Delete all***
* Lets code it up



### TODO
* https://www.youtube.com/watch?v=VmogG01IjYc

We can do better.

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
