/**
 * Example:
 * function compare(a, b) {
 *  if (a is less than b by some ordering criterion) {
 *    return -1;
 *  } else if (a is greater than b by the ordering criterion) {
 *    return 1;
 *  } else {
 *    return 0;
 *  }
 * }
 */
export type CompareFn<T> = (a: T, b: T) => number

/**
 * Implments the heap data structure
 * A heap is used as a priority queue
 * Note: The default compare behavior gives you a min heap
 */
export class Heap<T> {
  private data: T[] = [];
  constructor(private compareFn: CompareFn<T>) { }


  private left(nodeIndex: number): number {
    return (2 * nodeIndex) + 1;
  }
  private right(nodeIndex: number): number {
    return (2 * nodeIndex) + 2;
  }
  private parent(nodeIndex: number): number {
    return nodeIndex % 2 == 0
      ? (nodeIndex - 2) / 2
      : (nodeIndex - 1) / 2;
  }


  /**
   * Returns the number of elements in the heap in O(1)
   */
  size() {
    return this.data.length;
  }

  /**
   * Retrieves but does not remove the root element of this heap in O(1)
   * - Returns undefined if the heap is empty.
   */
  peek(): T | undefined {
    if (this.data.length > 0) {
      return this.data[0];
    } else {
      return undefined;
    }
  }
}
