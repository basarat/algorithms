# Find the repeated item in an array
> Say you have an array that has at least one item repeated. How would you find the repeated item. This is a question commonly presented to beginner developers. Here we discuss the elegant solution to this problem.

```js
/**
 * Returns the first repeated item from an array if any
 * @throws {Error} if there is no item repetition
 */
```
* The objective is to find the repeated item in the array.

```js
export function repeatedItem<T>(array: T[]): T {
  throw new Error('No item repetition');
}
```
* We start by creating our function which takes an array of type T and return the repeated item T if any.
* Within the function we will throw an error if no item repetion is found

```js
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return array[i];
    }
  }
```
* Intitively we can check item repetition by iteration through the array item by item.
* And checking each item against any item on its right hand side 
* If any two items match we have found our duplicate.

This implementation does work fine. However due to the two loops the runtime is of the order (n^2). 

***Delete the for loops***
We can do better using a data structure designed for object uniqueness.

```js
const set = new Set<T>();
for (const item of array) {
  if (set.has(item)) return item;
  else set.add(item);
}
```
* We start by creating a set
* We loop through each item in the array.
* If an item with the same value already exists in the set, We have found our duplicate and we return it. 
* Otherwise we add the current item to the set.

* Once the loop completes we throw same as before. 

***Select the for loop**
Since we only loop through the items in the array once, doing constant work in each loop thanks to the set data structure, the runtime now falls to the order of n where n is the length of the array.
