/**
 * Keeps a running account of the median
 */
export class MedianMaintenanceArray {
  private data: number[] = [];

  /**
   * Adds a number to the internal storage, and returns the new median
   * O(n)
   */
  add(item: number): number {
    for (let index = 0; index < this.data.length; index++) {
      if (item < this.data[index]) {
        this.data.splice(index, 0, item);
        return this.median();
      }
    }
    this.data.push(item);
    return this.median();
  }

  /** Returns median in O(1) */
  private median() {
    if (this.data.length % 2 == 0) {
      const middle2 = this.data.length / 2;
      const middle1 = middle2 - 1;
      return (this.data[middle1] + this.data[middle2]) / 2;
    }
    else {
      const middle = Math.floor(this.data.length / 2);
      return this.data[middle];
    }
  }
}

import { Heap } from '../heap/heap';
/**
 * Keeps account of medians using heaps
 */
export class MedianMaintenanceHeap {
  private lowMaxHeap = new Heap<number>((b, a) => a - b);
  private highMinHeap = new Heap<number>((a, b) => a - b);

  /**
   * Adds a number to the internal storage, and returns the new median
   * O(log n)
   */
  add(item: number): number {
    /** Add to correct heap */
    if (this.lowMaxHeap.size() == 0 || item < this.lowMaxHeap.peek()) {
      this.lowMaxHeap.add(item);
    }
    else {
      this.highMinHeap.add(item);
    }

    /** Rebalance */
    const biggerHeap = this.lowMaxHeap.size() > this.highMinHeap.size()
      ? this.lowMaxHeap
      : this.highMinHeap;
    const smallerHeap = biggerHeap === this.lowMaxHeap ? this.lowMaxHeap : this.lowMaxHeap;

    if ((biggerHeap.size() - smallerHeap.size()) > 1) {
      smallerHeap.add(biggerHeap.extractRoot());
    }

    /** Return the median */
    if (this.lowMaxHeap.size() === this.highMinHeap.size()) {
      return (this.lowMaxHeap.peek() + this.highMinHeap.peek()) / 2;
    }
    else {
      return this.lowMaxHeap.size() > this.highMinHeap.size()
        ? this.lowMaxHeap.peek()
        : this.highMinHeap.peek();
    }
  }
}
