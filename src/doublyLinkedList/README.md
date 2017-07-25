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

There is a data structure called a `doubly` linked list that would make figuring out the node `previous` to the tail trivial.

```js
undefined <-> node { value, next, prev } <-> node { value, next, prev } <-> undefined
```

Instead of just `value` and `next` we also keep track of any previous node, against each node. Of course, for the head `prev` will be `undefined` and for the `tail` the `next` will be `undefined`.

Lets make this concrete and define a `DoublyLinkedListNode` as a generic interface that holds a value and potentially the next and prev nodes.

```js
/**
 * Linked list node
 */
export interface DoublyLinkedListNode<T> {
  value: T
  next?: DoublyLinkedListNode<T>
  prev?: DoublyLinkedListNode<T>
}
```

Now on `add` we will create a `DoublyLinkedListNode<T>` of `T` with `next` and `prev` values. If this is the first node. We store it has the head. If we already have a tail, we not only update the `next` pointer for the `tail`, but we also update the `prev` pointer for this new node. Finally we store this new node as our new tail.

```js
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
```

The dequeue operation is equally simply. We simply need to clear the `prev` whenever we load a new `head`.

```js
/**
 * FIFO removal in O(1)
 */
dequeue(): T | undefined {
  if (this.head) {
    const value = this.head.value;
    this.head = this.head.next;
    this.head.prev = undefined;
    if (!this.head) {
      this.tail = undefined;
    }
    return value;
  }
}
```

Now with these simple modifications in place, lets revisit adding a LIFO `pop` operation. It is actually going to be a straight copy of the `dequeue` operation, with a simple change of `head` to `tail`, `next` to `prev` and `prev` to `next`. And thats it. We now have a data structure that provide O(1) runtime for both FIFO Queue and LIFO Stack operations.

To reiterate the main advantage of using a `DoublyLinkedList` is that any operations that require constant `next` and `prev` reference manipulations, can be implemented with `O(1)` time complexity.
