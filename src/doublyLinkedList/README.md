# Implement a doubly linked list in TypeScript
> In a doubly linked list each node in the list stores the contents of the node and a pointer or reference to the next and the previous nodes in the list. It is one of the simplest way to store a collection of items.
> In this lesson we cover how to create a doubly linked list data structure and how to use its strenghts to implement an O(1) FIFO queue + O(1) LIFO stack.

Here we have a singly linked list node and a singly linked list.

Lets say we wanted to add a last in first out `pop` operation.
* It will return either the last value or undefined if we are out of elements
* If we don't have a `tail` we can quit early, otherwise we simply wait.

```js
/**
 * LIFO removal in O(1)
 */
pop(): T | undefined {
  if (this.tail) {
    const value = this.tail.value;
    this.tail = // figure out a new tail
  }
}
```
