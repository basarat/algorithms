# Maximum Subarray algorithm implementation using TypeScript / JavaScript

> The maximum subarray problem is one of the nicest examples of dynamic programming application.

> In this lesson we cover an example of how this problem might be presented and what your chain of thought should be to tackle this problem efficiently.


Given an array of `n` numbers return a contiguous subarray that has the largest sum.

```ts

```

You can solve this problem with an inductive hypothese. An element at ith position would be a part of a maximum sub array ending at `i` only if the elements before it make a max subarray for the previous elements. Unless of-course the element at `i` is larger than the previous max subarray, and therefore starts its own max sub array.

