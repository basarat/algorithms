# Implement a singly linked list in TypeScript
> In a singly linked list each node in the list stores the contents of the node and a pointer or reference to the next node in the list. It is one of the simplest way to store a collection of items.
> In this lesson we cover how to create a linked list data structure and how to use its strenghts to implement an O(1) FIFO queue.

The trick to writing a linked list, and really *any* data structure is to define a `node`.

A linked list is simply

`node {value} -next> node{value} -next> undefined`

The linked list data structure itself simply maintains the `{head}` node.
**Select the `node {value}`**

So obviously the first thing to do is to define what we mean by a node.
* This is easy to do in TypeScript as a generic interface.
* We have a `value` member where we store the value
* And then we have a pointer to the `next` node if any

```js
/**
 * Linked list node
 */
export interface LinkedListNode<T> {
  value: T
  next: LinkedListNode<T>
}
```
