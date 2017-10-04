# Sum of Arithmetic Series
> There is a particular Arithmetic series that shows up time and time again in analysis of naive implementations of many common programming challenges.

> In this lesson we show why the time complexity is Quadratic, so you don't have to keep analyzing it over and over.


* It shows up quite commonly when you are given items one by one and you decide to look at all the items you have been given thus far.

* A classic example is insertion sort an algorithm we have already looked at, but lets analyze it a bit more.
* We have some numbers. Lets say, the worst case scenario for insertion sort, the numbers `2 4 6 7 8 9` which are already sorted.
* We look at these, one by one,
* In iteration 1 we get number 2 and just pop this number in the start. So we look at `0` existing numbers.
* In iteration 2 we pick the next number, 4, compare it to 2, since its larger we pop it at the end. In total, we needed to look at `1` existing numbers
* In iteration 3, we get the number 6, compare it to 2, since its larger we next compare it to 4, since its larger we now get to pop up at the end. So we needed to look at `2` existing numbers.
* Similarly in iteration 4, for worst case we need to look at `3` existing items
* And so on, till iteration `n` we look at `n-1` existing items, only to find the new items belongs at the very end.

* So the total work across `n` iterations is simply the sum of the lookups in each iteration.
* Lets call this `A`
* Another way of writing the same sum is as a descending series,
* And if we sum these two ways of writing the same equation we get a new equation where we have `n` values, all of which are equal to `n-1`.
* So, `2A` equals `n times n-1`
* Or total work `A` equals `n times n-1 / 2`.
* You will see this equation quite commonly in text books.
* But as algorithm designers we are generally interested in the big O complexity which simply resolves to the highest power of n which is n squared.

```js
`
2 4 6 7 8 9

1    2 => 2         0
2    4 => 2 4       1
3    6 => 2 4 6     2
4    7 => 2 4 6 7   3
...
n                  n-1

Total work across n = 0 + 1 + 2 + ... + n-1

A =   0  +  1  +  2  + ... + n-1
A =  n-1 + n-2 + n-3 + ... +  0
-sum------------------------------
2A = n-1 + n-1 + n-1 +     + n-1

2A = n * (n-1)

A  = n (n-1) / 2

-- EXTRA --
A  = (n^2)/2 - (n)/2
O(A) = O(n^2)
`
```
