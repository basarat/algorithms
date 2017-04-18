# Merge sort using TypeScript
> MergeSort is a famous example of a divide and conquer algorithm. In this lesson we cover the merge sort algorithm, how it gets its name, and how to implement it using TypeScript / JavaScript.




```
T(n) = 2 * T(n/2) + O(n)
```
* The time cost for the recursive work in merge sort can be shown as an equation
  * 2 recursive calls on half the problems and a linear amount of work performed by merge
* If you solve this recursion by induction you get an approximate upperbound runtime of 
```
O(n logn)
```
