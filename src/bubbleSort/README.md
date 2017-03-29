# Bubble sort using TypeScript
> In this lesson we cover the bubble sort algorithm, how it gets its name, and how to implement it using TypeScript.

* We will go ahead and create a sorting function for bubble sort.
* Bubble sort is a comparison based sorting algorithm, so it will need a comparison function.
* Bubble sort works by looping over the input array twice.
* In each iteration the goal is to *Bubble* the highest ranking value to the end.
* To do this we simply check if the current value on the left is less than the current value on the right

```ts
function bubbleSort<T>(
  arr: T[],
  cmp: (a: T, b: T) => number
): T[] {
  for (let index = 0; index < arr.length; index++) {
    for (let index = 0; index < arr.length; index++) {
      
    }
  }
}
```