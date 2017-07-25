/**
 * Linked list node
 */
export interface DoublyLinkedListNode<T> {
  value: T
  next?: DoublyLinkedListNode<T>
  prev?: DoublyLinkedListNode<T>
}

/**
 * Linked list for items of type T
 */
export class DoublyLinkedList<T> {
  public head?: DoublyLinkedListNode<T> = undefined;
  public tail?: DoublyLinkedListNode<T> = undefined;

  /**
   * Adds an item in O(1)
   **/
  add(value: T) {
    const node: DoublyLinkedListNode<T> = {
      value,
      next: undefined,
      prev: undefined,
    }
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
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
      else {
        this.head.prev = undefined;
      }
      return value;
    }
  }

  /**
   * LIFO removal in O(1)
   */
  pop(): T | undefined {
    if (this.tail) {
      const value = this.tail.value;
      this.tail = this.tail.prev;
      if (!this.tail) {
        this.head = undefined;
      }
      else {
        this.tail.next = undefined;
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
