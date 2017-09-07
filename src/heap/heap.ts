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
 * Implements the heap data structure
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
   * Adds the given element into the heap in O(logn)
   */
  add(element: T) {
    this.data.push(element);
    this.siftUp(this.data.length - 1);
  }

  /**
   * Moves the node at the given index up to its proper place in the heap.
   * @param index The index of the node to move up.
   */
  private siftUp(index: number): void {
    let parent = this.parent(index);
    while (index > 0 && this.compareFn(this.data[parent], this.data[index]) > 0) {
      [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
      index = parent;
      parent = this.parent(index);
    }
  }

  /**
   * Retrieves and removes the root element of this heap in O(logn)
   * - Returns undefined if the heap is empty.
   */
  extractRoot(): T | undefined {
    if (this.data.length > 0) {
      const root = this.data[0];
      const last = this.data.pop();
      if (this.data.length > 0) {
        this.data[0] = last;
        this.siftDown(0);
      }
      return root;
    }
  }

  /**
   * Moves the node at the given index down to its proper place in the heap.
   * @param nodeIndex The index of the node to move down.
   */
  private siftDown(nodeIndex: number): void {
    /** @returns the index containing the smaller value */
    const minIndex = (left: number, right: number) => {
      if (right >= this.data.length) {
        if (left >= this.data.length) {
          return -1;
        } else {
          return left;
        }
      } else {
        if (this.compareFn(this.data[left], this.data[right]) <= 0) {
          return left;
        } else {
          return right;
        }
      }
    }

    let min = minIndex(this.left(nodeIndex), this.right(nodeIndex));

    while (
      min >= 0
      && this.compareFn(this.data[nodeIndex], this.data[min]) > 0
    ) {
      [this.data[min], this.data[nodeIndex]] = [this.data[nodeIndex], this.data[min]];
      nodeIndex = min;
      min = minIndex(this.left(nodeIndex),
        this.right(nodeIndex));
    }
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
