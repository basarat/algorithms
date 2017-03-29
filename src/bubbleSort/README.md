# Bubble sort using TypeScript
> In this lesson we cover the bubble sort algorithm, how it gets its name, and how to implement it using TypeScript.

* We will go ahead and create a sorting function for bubble sort.
* Bubble sort works by looping over the input array twice.
* In each iteration the goal is to *Bubble* the highest ranking value to the end.
* To do this we simply check if the current value on the left is less than the current value on the right. 
* If so we swap the two variable positions

```ts
export function bubbleSort(
  arr: number[]
): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
}
```
