# Sum of Arithmetic Series
> There is a particular Arithmetic series that shows up time and time again in analysis of naive implementations of many common programming challenges.

> In this lesson we show why the time complexity is Quadratic, so you don't have to keep analyzing it over and over.


* It shows up quite commonly when you are given items one by one and you decide to look at all the items you have been given thus far.

* A classic example is insertion sort an algorithm we have already looked at, but lets analyze it a bit more.


```js
`
1 5 3 2 4 7

0    1 => 1         0
1    5 => 1 5       1
2    3 => 1 3 5     2
3    2 => 1 2 3 5   3
...
n - 1               n-1

Total work = 0 + 1 + 2 + ... + n-1

A =   0  +  1  +  2  + ... + n-1
A =  n-1 + n-2 + n-3 + ... +  0
---------------------------------
2A = n-1 + n-1 + n-1 +     + n-1

2A = n * (n-1)

A  = n (n-1) / 2

A  = (n^2)/2 - (n)/2

O(A) = O(n^2)
`
```
