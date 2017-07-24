/**
 * Linked list node
 */
export interface LinkedListNode<T> {
  value: T
  next?: LinkedListNode<T>
}

/**
 * Linked list for items of type T
 */
export class LinkedList<T> {
  public head?: LinkedListNode<T> = undefined;
  public tail?: LinkedListNode<T> = undefined;

  /**
   * Adds an item in O(1)
   **/
  add(value: T) {
    const node = {
      value,
      next: undefined
    }
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  /**
   * FIFO removal in O(1)
   */
  dequeue(): T | undefined {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = undefined;
      }
      return value;
    }
  }

  /**
   * Returns an iterator over the values
   */
  *values() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
