# Insertion sort using TypeScript
> In this lesson we cover the insertion sort algorithm, how it gets its name, and how to implement it using TypeScript.

* We will go ahead and create a sorting function for insertion sort.
* Insertion sort is very similar to how most humans sort cards in their hands. We scan the cards left to right, inserting each individual card one by one to its rightfull place on the left.

```js
export function insertionSort(
  array: number[]
): number[] {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```
* The code follows a similar pattern. We loop through all the items in the array skipping the first one.
* Our goal is the put the current array item into its rightfull place in the items on the left.
 * Storing the item in a `current` variable opens up a hole at the ith position that can use to slide items if they are bigger than the current item.
* We will start our comparison with the item on its immediate left.
* We will continue looping all the way to the first item, and if the item at that index is bigger then the current item, 
  * We will go ahead and move that item to the right to make room for the current item. 
* Once the current item is no longer bigger than the item at position j, we can fill the hole at position j+1 with the current item.
* Finally we continue the loop.
* And return the sorted array. 

* In the worst case this inner loop will still run O of n times resulting in a time complexity of O n times n i.e. O(n^2).
* Since we are doing the array item moves in place the space complexity is O(n).
