We could implement it using a JavaScript array.

Sadly, in JavaScript implementations, array function that do require any changes to the index of current items, have an average runtime of O(n) and therefore this implementation does not meet our constant operation cost requirement.

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
