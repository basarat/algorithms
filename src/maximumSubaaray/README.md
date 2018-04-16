# Maximum Subarray algorithm implementation using TypeScript / JavaScript

> The maximum subarray problem is one of the nicest examples of dynamic programming application.

> In this lesson we cover an example of how this problem might be presented and what your chain of thought should be to tackle this problem efficiently.



```ts
`
The problem statement:
* Given an array of `n` numbers return a contiguous subarray that has the largest sum.

Consider an example array:
[-2, 1, 3, 4, -1, 2, 1, -5, 4]
The subarray with the largest sum for this example would be:
[4, -1, 2, 1] with the sum 6.

There are TWO key observations

Observation 1:
-------------

The maximum subarray sum for 0 - to - i when an element at i is included can be represented as
 * maxInc(i) = maxInc(i - 1) + val(i)

Of course if "maxInc(i - 1) < 0" then there is no point in including that so a better formula would be:
 * BETTER maxInc(i) = maxInc(i - 1) > 0 ? maxInc(i - 1) + val(i) : val(i)

Observation 2:
-------------
The second observation is that the max sum for 0 - to - i can be represented as:
 * max(i) = maxInc(i) > max(i - 1) ? maxInc(i) : max(i - 1)

Combining these observations we have the following two relations

maxInc(i) = maxInc(i - 1) > 0 ? maxInc(i - 1) + val(i) : val(i)
max(i) = maxInc(i) > max(i - 1) ? maxInc(i) : max(i - 1)

Notice that uptill index (i) we can know the answer "max(i)" immediately if we have
* maxInc( i - 1)
* max(i - 1)

So the answer uptill 0 to i only depends on values that appear earlier in the array.

We can solve this by hand with a simple table:

ELEMENT | maxInc |  max
   -2   |   -2   |  -2
    1   |    1   |   1
   -3   |   -2   |   1
    4   |    4   |   4
   -1   |    3   |   4
    2   |    5   |   5
    1   |    6   |   6
   -5   |   -1   |   6
    4   |    5   |   6

So the sum of the maximum subarray for the given input is 6.

Given a table like this which we can store in O(n) since its just two additional arrays we could easily derive the subset array that is giving this answer.

However we can do better by simply observing that
  * the subset array would *start* at index i if the val(i) gets copied to the "max" section
  * the sebset array would *end* at index i if maxInc gets copied to the "max" section
Lets code it up.
`
```

You can solve this problem with an inductive hypothese. An element at ith position would be a part of a maximum sub array ending at `i` only if the elements before it make a max subarray for the previous elements. Unless of-course the element at `i` is larger than the previous max subarray, and therefore starts its own max sub array.

