/**
 * First In First Out (FIFO) with O(1) key operations
 */
export class Queue<T> {
  private lastDequeuedIndex = 0;
  private nextEnqueueIndex = 0;
  private data: { [index: number]: T } = Object.create(null);

  /** Adds the item in O(1) */
  enqueue(item: T) {
    this.data[this.nextEnqueueIndex] = item;
    this.nextEnqueueIndex++;
  }

  /**
   * dequeues the first inserted item in O(1)
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

  /**
   * Returns the number of elements in the queue
   */
  size(): number {
    return this.nextEnqueueIndex - this.lastDequeuedIndex;
  }
}
