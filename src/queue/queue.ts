/**
 * First In First Out (FIFO) with O(1) key operations
 */
export class Queue<T> {
  lastDequeuedIndex = 1;
  nextEnqueueIndex = 1;
  storage: { [index: number]: T } = Object.create(null);

  /** Adds the item in O(1) */
  enqueue(data: T) {
    this.storage[this.nextEnqueueIndex] = data;
    this.nextEnqueueIndex++;
  }

  /**
   * dequeues the first inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  dequeue(): T | undefined {
    if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
      const dequeued = this.storage[this.lastDequeuedIndex];
      delete this.storage[this.lastDequeuedIndex];
      this.lastDequeuedIndex++;
      return dequeued;
    }
  }

  /**
   * Returns the number of elements in the queue
   */
  size(): number {
    return this.nextEnqueueIndex - this.lastDequeuedIndex;
  }
}
