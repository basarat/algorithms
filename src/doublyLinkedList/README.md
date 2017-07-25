# Implement a doubly linked list in TypeScript
> In a doubly linked list each node in the list stores the contents of the node and a pointer or reference to the next and the previous nodes in the list. It is one of the simplest way to store a collection of items.
> In this lesson we cover how to create a doubly linked list data structure and how to use its strenghts to implement an O(1) FIFO queue + O(1) LIFO stack.

Here we have a singly linked list node and a singly linked list.

Lets say we wanted to add a last in first out `pop` operation.
* It will return either the last value or undefined if we are out of elements
* We can only pop a value if we still have an active `tail`
* We can grab the value that we want to return from the tail.
* Next we have to do our routine maintaince of the `tail` and `head` nodes.
* Now the new tail would be the second last item in the linked list. To find that we would need to start from the `head` till we arrive at a node whole `next` is the current `tail`. However such an implementation would be `O(n)` and we want an `O(1)` algorithm.

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
