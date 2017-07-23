# Stack implementation using TypeScript
> A stack is an abstract data type that stores a collection of elements, with two principal operations: 
* push: adds an element to the collection
* pop: removes the most recently added element that was not yet removed.
The order in which elements are poped is `Last In First Out` aka. `LIFO`. In this lesson we discuss how to implement it using JavaScript / TypeScript.

A `stack` is a Last in First out (LIFO) with key operations having a time complexity of O(1). We can model this easily in TypeScript using a generic class for items of type T.

* It will have two key operations.
* The first one is push which adds an item into the stack in O(1).
* The other key operation pops an item from the stack in O(1). If there are no more items we can return an out of bound value like `undefined`. This fact can be modeled into the type system by using a union of T and `undefined`.

```js
/**
 * Last In First Out (LIFO) with O(1) for key operations
 */
export class Stack<T>{
  /** Adds the item in O(1) */
  push(item: T): void {
  }

  /**
   * Pops the last inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  pop(): T | undefined {
  }
}
```


The objective is to implement these `push` and `pop` operations such that they operate in `O(1)` time. Fortunately in JavaScript implementations, array function that do not require any changes to the index of current items, have an average runtime of O(1).

* Therefore we can simply implement the operations of this data structure using an array.
* On push we push the item into the array
* On pop we simply return the same result as array.pop
```js
/**
 * Last in First out (LIFO) with O(1) key operations
 */
export class Stack<T>{
  private data: T[] = [];

  /** Adds the item in O(1) */
  push(item: T): void {
    this.data.push(item);
  }

  /**
   * Pops the last inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  pop(): T | undefined {
    return this.data.pop();
  }
}
```

A common additional operation for collection data structures is the `size` as it allows you to safely find out if there are any elements present in the data structure. Fortunately JavaScript arrays implement this for us in the form of the length property:

```js
  /**
   * Returns the number of elements in the stack in O(1)
   */
  size(): number {
    return this.data.length;
  }
```
