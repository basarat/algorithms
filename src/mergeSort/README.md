# Merge sort algorithm using TypeScript
> MergeSort is a famous example of a divide and conquer algorithm. In this lesson we cover the merge sort algorithm, how it gets its name, and how to implement it using TypeScript / JavaScript.

* We go ahead and create a simple function to sort using mergeSort
```js
export function mergeSort(array: number[]): number[] {

}
```

Mergesort is a recursive algorithm. In any recursive algorithm you will have some base conditions that terminate the recursion.

* For sorting you can abort if the lenght of the array is less than or equal to 1 as an array of 1 item is already sorted.
```js
  if (array.length <= 1) {
    return array;
  }
```

* In merge sort we divide the array into two equal portions. We can do this by finding the middle item, and getting the two slices of the array.
```js
const middle = Math.floor(array.length / 2);
const left = array.slice(0, middle);
const right = array.slice(middle);
```
* For an uneven array lenght the right portion will be bigger than the left one but it shouldn't matter for our use case.

* The beauty of merge sort is that given sorted left and right segments, it is very easy to merge them into a bigger sorted segment.
* We will offload the segment sorting problem recursively to mergeSort itself and now focus on this merging of sorted array segments
```js
return merge(mergeSort(left), mergeSort(right));
```

* Lets go ahead and write this merge function:
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
      array.push(rItem);
      rIndex++;
    }
    else if (rItem == null) {
      array.push(lItem);
      lIndex++;
    }
    else if (lItem < rItem) {
      array.push(lItem);
      lIndex++;
    }
    else {
      array.push(rItem);
      rIndex++;
    }
  }
  return array;
```
***const array: number[] = [];***
* We create an array that we will contain the merged result.
***the index creations***
* We use two variables to track the index into the left and right sections of the array.
***the while loop***
* We will loop through the left and right sections and abort once we are out of elements in both segments.
***the item creations***
* We store the current left and right item lookups to make the remaining logic a bit simpler.
***Each if / else***
* If we are out of items in the left segment then we should get the next item from the right segment and increment its index.
* else if we are out of items in the right segment we simple get the next item from the left segment and increment its index.
* else if the left item is less than the right item we add the left item to the array and increment that index.
* otherwise we add the right item as it is smaller and increment the right index.
***The return***
* Once the loop terminates we would have all the item from right and left added one by one into the final array which represented a sorted merged version of left + right.


* The time cost for the recursive work in merge sort can be shown as an equation
  * 2 recursive calls on half the problems and a linear amount of work performed by merge
```
T(n) = 2*T(n/2) + O(n)
```

* If you solve this recursion by induction you get an approximate upperbound runtime of
```
O(n logn)
```
