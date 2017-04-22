# Merge sort algorithm using TypeScript
> MergeSort is a famous example of a divide and conquer algorithm. In this lesson we cover the merge sort algorithm, how it gets its name, and how to implement it using TypeScript / JavaScript.

* We go ahead and create a simple function to sort using mergeSort. It takes a number array and returns a sorted number array.
```js
/**
 * Sorts an array using merge sort
 */
export function mergeSort(array: number[]): number[] {

}
```

MergeSort is a recursive algorithm. In any recursive algorithm you will have some base conditions that terminate the recursion.

* For sorting you can abort if the lenght of the array is less than or equal to 1, as an array of 1 item is already sorted.
```js
  if (array.length <= 1) {
    return array;
  }
```

* In merge sort we divide the array into two equal portions, and sort them recursively.
* To get these two portions of the array, we first find the middle index by dividing the array length by 2.

```js
const middle = Math.floor(array.length / 2);
const left = array.slice(0, middle);
const right = array.slice(middle);
```
* We then make two equal slices of the array using `array.slice` and store them as `left` and `right`.
* For an uneven array length the right portion will be bigger than the left one, but it shouldn't matter for us, as it will all recursively boil down to an array of length 1.

The beauty of merge sort is that given sorted left and right segments, it is very easy to merge them into a bigger sorted segment.

* We will offload the segment sorting problem recursively to mergeSort itself by invoking it with the `left` and `right` arrays. Finally we will call the `merge` function which will merge these sorted segments into a bigger sorted segment.
```js
return merge(mergeSort(left), mergeSort(right));
```

* Lets go ahead and write this merge function.
* The merge function plays the `conquering` role in the mergeSort divide and conquer algorithm, and is truly where the beating heart of mergesort exists.
* It takes the sorted left and right segments, and is responsible for cleverly merging them into a  single sorted array.

```js
/** Merge (conquer) step of mergeSort */
function merge(left: number[], right: number[]): number[] {
}
```

```js
  const array: number[] = [];
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex + rIndex < left.length + right.length) {
    const lItem = left[lIndex];
    const rItem = right[rIndex];
    if (lItem == null) {
      array.push(rItem); rIndex++;
    }
    else if (rItem == null) {
      array.push(lItem); lIndex++;
    }
    else if (lItem < rItem) {
      array.push(lItem); lIndex++;
    }
    else {
      array.push(rItem); rIndex++;
    }
  }
  return array;
```
***const array: number[] = [];***
* We create an array that we will contain the merged result.
- The innovation is to simply, one by one select the smallest item, from either the left or the right segment and put that into the result giving us the merged sorted array.

***the index creations***
* We use two variables to track the index into the left and right segments. lIndex for the left segment and rIndex for the right segment.
***the while loop***
* We will loop through all the items in the left and right segments and abort once we are out of elements in both segments.
***the item creations***
* We store the current left and right item lookups into `lItem` and `rItem` to make the remaining loop logic a bit simpler.
***Each if / else***
* If we are out of items in the left segment as indicated by an undefined lookup result, then we should get the next item from the right segment and increment its index.
* else if we are out of items in the right segment we simply get the next item from the left segment and increment its index.

* Else since we have both left and right item, we simply check which one is bigger. If the left item is less than the right item we add the left item to the array and increment that index.
* otherwise we add the right item as it is smaller and increment the right index.
***The return***
* Once the loop terminates we would have all the items from right and left added one by one into the final array which represents a sorted merged version of left + right. This merging of sorted segments is the reason why the algorithm is called mergeSort.


* To understand the algorithm lets run through a simple example. We will call merge sort with the array `4,3,2,1`. We expect the output to be 1,2,3,4.
`console.log(mergeSort([4, 3, 2, 1]));`
* We will log out the output of the merge routine's input `left` and `right` along with the merged result `array`.
`console.log({ left, right, array });`
* We will also log out the input array whenever mergeSort is called. This will help us see the recursion on bigger problems going down to smaller subsets.
```js
export function mergeSort(array: number[]): number[] {
  console.log(array);
}
```

* Now lets run this example and get the output.

* You can see that we split 4,3,2,1 into two smaller problems.
* First one is 4,3 which we further split into 4 and 3,
* We merge these single item sorted arrays to get get the larger sorted array 3,4
* We then do the same for 2,1, splitting it into 2 and 1 and then merging it as the sorted 1,2
* Finally we merge these 3,4 and 1,2, into the sorted 1,2,3,4
* And this is our final merged output.


* The time cost for the recursive work in merge sort can be shown as an equation
  * We have 2 recursive calls to mergesort itself each half the size of the original problem.
  * We then do a linear amount of work in the merge function simply looping over the items in the left and the right segments once.
```
T(n) = 2*T(n/2) + O(n)
```

* If you solve this recursion by induction, you get an approximate upperbound runtime of
```
O(nlogn)
```
