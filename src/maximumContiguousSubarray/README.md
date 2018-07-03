# Maximum Contiguous Subarray algorithm implementation using TypeScript / JavaScript

> The maximum subarray problem is one of the nicest examples of dynamic programming application.

> In this lesson we cover an example of how this problem might be presented and what your chain of thought should be to tackle this problem efficiently.


```ts
`
[-2, 1, 3, 4, -1, 2, 1, -5, 4]
          [4, -1, 2, 1]         with the sum 6
`
```
The problem statement:
* Given an array of `n` numbers return a contiguous subarray that has the largest sum.
* Consider an example array
* The subarray with the largest sum for this example would be


```ts
for (every starting) {
  for (every ending > starting) {
    checkIfThisIsTheMaxSum(starting, ending);
  }
}
```

A naive solution would be to simply check all possible subarrays. 
That is of the order O(n^2) as we would loop through every starting point and for every starting point we would check every possible tailing ending point.

* We can actually get a much better linear solution there are TWO key observations

```ts
`
Observation 1:
-------------
 * maxInc(i) = maxInc(i - 1) + val(i)
 * BETTER maxInc(i) = maxInc(i - 1) < 0 ? val(i) : maxInc(i - 1) + val(i)
`
```
* The maximum sum for any subarray in the range 0 - to - i when an element at i MUST be included can be represented as
* Of course if the previous max is less than zero then there is no point in including that so and we should only use the value at i.


```ts
`
Observation 2:
-------------
 * max(i) = maxInc(i) > max(i - 1) ? maxInc(i) : max(i - 1)
`
```
* The second observation is that the overall max sum for the subarray 0 - to - i irrespective of if the ith item is included or not can be represented as the larger of the max at `i-1` OR the max of when i is included.

```ts
`
Combining
---------
maxInc(i) = maxInc(i - 1) > 0 ? maxInc(i - 1) + val(i) : val(i)
max(i) = maxInc(i) > max(i - 1) ? maxInc(i) : max(i - 1)
`
```
* Combining these observations we have these two neatly written down relations.


```ts
`
For max(i) we need:
* maxInc(i - 1)
* max(i - 1)
`
```
* Notice that uptill index (i) we can know the answer "max(i)" immediately if we have the `maxInc i-1` and `max i-1`
* So the answer uptill i only depends on values that appear earlier in the array.

***Highlight max(i-1)***
> When a problem can be easily solved *given* someone gives us the pre-solved answer to a subset of the problem, the problem solving approach is called dynamic programming. The optimal answer at `i` depends on optimal answers for `i- some constant` and the problem is said to have optimal substructure.


```ts
`
ELEMENT | maxInc |  max
--------|--------|-----
   -2   |   -2   |  -2
    1   |    1   |   1
   -3   |   -2   |   1
    4   |    4   |   4
   -1   |    3   |   4
    2   |    5   |   5
    1   |    6   |   6
   -5   |   -1   |   6
    4   |    5   |   6
`
```
A key trait of dynamic programming algorithms is that they can be solved with a simple table. 
* Lets solve the example array by hand to demonstrate this tabular approach.
* At element -2, the max including it would be -2, so the max we can hope to achieve is -2, 
* At element  1, the max including it would be 1, as there is no point in including the previous -2. So the max is 1, 
* At element -3, the max including it would be -2, as we should include the previous maxInc of 1. However since this is less than the previous max, so we wouldn't includ `maxInc` for the net max. 

***Annotate the two formulas***
* Lets just fill out the rest of the table a bit faster. You basically just follow the two formulas for `maxInc` and `max` at each step. 

```js
`
So the sum of the maximum subarray for the given input is 6.
`
```
* The sum of the maximum subarray for when all the items have been considered is simply the value at the `max` column for the last row. 

***Select the table***
* We can store a table like this in O(n) since its just two additional arrays
* Using this table we could also potentially easily derive the maximum subset array that gave us the final max value.

```ts
`
maxStartIndex = i when val(i) =was copied to> max
maxEndIndex = i when maxInc(i) =was copied to> max
`
```
However we can do better than keeping this full table in memory by keeping track of a few variables, We simply observe that
* the subset max array would *start* at index i if the val(i) gets copied to the "max" section, which indicates that this value is greater than any max we had seen so far and essentially starts a new max sub array section.
* the subset max array would expand to include index i if maxInc gets copied to the "max" section, which indicates that `i` is in the tail of the `max` solution.

We now have a firm understanding of the problem and we can code it up as a simple iteration from 0 to n. This is another trait of dynamic programming algorithms, you normally use iteration instead of recursion. 

```ts
/**
 * Given an array of `n` numbers
 * return a contiguous subarray that has the largest sum
 */
export function maximumContiguousSubarray(array: number[]): number[] {
  if (!array.length) {
    return [];
  }

  let maxInc = array[0];
  let max = array[0];
  let maxStartIndex = 0;
  let maxEndIndex = 0;

  for (let i = 1; i < array.length; i += 1) {
    const val = array[i];

    maxInc = Math.max(maxInc + val, val);
    max = Math.max(max, maxInc);

    if (val === max) {
      maxStartIndex = i;
    }
    if (maxInc === max) {
      maxEndIndex = i;
    }
  }

  return array.slice(maxStartIndex, maxEndIndex + 1);
}
```
* We start of with a simple function that takes and input array and returns the max contiguous subarray. 
* If we have an empty array we simply return an empty array.
* Next we initialize our loop invariants `maxInc` / `max`/`maxStartIndex` and `maxEndIndex`. 
* Then we simply loop through the elemnts in the array keeping track of these invariants at each iteration using their previous values to calculate new ones based on the relations we have already figured out.
* Once the loop terminates we simply return the max contiguous subarray as the slice from the original array using our calculated maxStart and maxEnd indexcies. 

Since this algorithm only does one pass through the input array, it has linear O(n) time complexity and a constant space complexity O(1) as we are only maintaining a few variables to track the invariants.

```ts
console.log(maximumContiguousSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
```
***run the live demo***
* Lets go ahead and call the function with the example input array. 
* If we run the code you can see that it works as expected giving us the expected maximum contiguous subarray.