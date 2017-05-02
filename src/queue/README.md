# Queue implementation using TypeScript
> A stack is an abstract data type that serves as a collection of elements, with two principal operations: enqueue, which adds an element to the collection, and dequeue, which removes the earliest added element. The order in which elements are dequeued is `First In First Out` aka. `FIFO`. The term `queue` takes it name from the real world queues e.g. "a queue at the ticket counter". In this lesson we discuss how to implement it using JavaScript / TypeScript.

We have the contract

```js

```

We could implement it using a JavaScript array.

Sadly, in JavaScript implementations, array function that require any changes to the index of current items, have an average runtime of O(n) and therefore this implementation does not meet our constant operation cost requirement.

```js
export class Queue<T>{
  private data: T[] = [];

  /** Enqueues the item in O(1) */
  enqueue(item: T): void {
    this.data.push(item);
  }

  /**
   * Dequeues the last inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  dequeue(): T | undefined {
    return this.data.shift();
  }
}
```
