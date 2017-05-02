/**
 * Last in First out (LIFO) with O(n) key operations
 */
export class Stack<T>{
  private data: T[] = [];

  /** Adds the item in O(1) */
  push(item: T) {
    this.data.push(item);
  }

  /**
   * Pops the last inserted item in O(1)
   * If there are no more items it returns `undefined`
   */
  pop() {
    return this.data.pop();
  }
}
