# Queue implementation using TypeScript
> A queue is an abstract data type that serves as a collection of elements, with two principal operations: enqueue, which adds an element to the collection, and dequeue, which removes the earliest added element. The order in which elements are dequeued is `First In First Out` aka. `FIFO`. The term `queue` takes it name from the real world queues e.g. "a queue at the ticket counter". In this lesson we discuss how to implement it using JavaScript / TypeScript.

A `stack` is a First In First Out (FIFO) collection data structure with key operations having a time complexity of O(1). We can model this easily in TypeScript using a generic class for items of type T.

```js
export class Queue<T>{
  /** Enqueues the item in O(1) */
  enqueue(item: T): void {
  }

  /**
   * Dequeues the last inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  dequeue(): T | undefined {
  }
}
```

We could naively, implement it using a JavaScript array.

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

Sadly, in JavaScript implementations, since `shift` requires changing the index of any remaining elements in the array, this implementation has an average runtime of O(n) and therefore, does not meet our O(1) operation cost requirement.

* Not all is lost however as we can implement it internally using a dictionary also called "Map"
* We will however need to track the valid range of indexes in this map in the form of `nextEnqueueIndex` and `lastDequeuedIndex` which we initialize to 0.
* Whenever there is a call to `enqueue` a new item we will store the item at the current `nextEnqueueIndex`, followed by incrementing the `nextEnqueueIndex` for any future calls to `enqueue`
* Whenever there is a call to `dequeue`, we simply check if the `lastDequeuedIndex` hasn't caught up to the `nextEnqueueIndex`. If it has then we let the default return of `undefined` handle that scenario. Otherwise:
  * we load the item that we plan to dequeue
  * delete it from the map
  * increment our lastDequeuedIndex
  * and finally return the dequeued item.

```js
export class Queue<T>{
  private lastDequeuedIndex = 1;
  private nextEnqueueIndex = 1;
  private data: { [index: number]: T } = Object.create(null);

  /** Enqueues the item in O(1) */
  enqueue(item: T): void {
    this.data[this.nextEnqueueIndex] = item;
    this.nextEnqueueIndex++;
  }

  /**
   * Dequeues the last inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  dequeue(): T | undefined {
    if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
      const dequeued = this.data[this.lastDequeuedIndex];
      delete this.data[this.lastDequeuedIndex];
      this.lastDequeuedIndex++;
      return dequeued;
    }
  }
}
```

The common additional requirement of adding a size function, can easily be met by diffing the `nextEnqueueIndex` with `lastDequeuedIndex`.

```js
/**
 * Returns the number of elements in the queue
 */
size(): number {
  return this.nextEnqueueIndex - this.lastDequeuedIndex;
}
```
