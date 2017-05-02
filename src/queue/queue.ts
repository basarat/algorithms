class Queue<T> {
  lastDequeuedIndex = 1;
  nextEnqueueIndex = 1;
  storage = Object.create(null);

  enqueue(data: T) {
    this.storage[this.nextEnqueueIndex] = data;
    this.nextEnqueueIndex++;
  }

  dequeue() {
    if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
      const deletedData = this.storage[this.lastDequeuedIndex];
      delete this.storage[this.lastDequeuedIndex];
      this.lastDequeuedIndex++;
      return deletedData;
    }
  }

  size() {
    return this.nextEnqueueIndex - this.lastDequeuedIndex;
  }
}
