# Bubble sort using TypeScript
> In this lesson we cover the bubble sort algorithm, how it gets its name, and how to implement it using TypeScript.

* We will go ahead and create a sorting function for bubble sort.
* Bubble sort works by looping over the input array twice.
* In each iteration the goal is to *Bubble* the highest ranking value to the end.
* To do this we simply check if the current value on the left is less than the current value on the right. 
* If so we swap the two variable positions

```ts
export function bubbleSort(
  array: number[]
): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  return array;
}
```
