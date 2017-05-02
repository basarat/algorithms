class Queue<T> {
  lastDequeuedIndex = 1;
  nextEnqueueIndex = 1;
  storage: { [index: number]: T } = Object.create(null);

  enqueue(data: T) {
    this.storage[this.nextEnqueueIndex] = data;
    this.nextEnqueueIndex++;
  }

  dequeue(): T | undefined {
    if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
      const dequeued = this.storage[this.lastDequeuedIndex];
      delete this.storage[this.lastDequeuedIndex];
      this.lastDequeuedIndex++;
      return dequeued;
    }
  }

  size() {
    return this.nextEnqueueIndex - this.lastDequeuedIndex;
  }
}
