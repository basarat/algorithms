# Implement a doubly linked list in TypeScript
> In a doubly linked list each node in the list stores the contents of the node and a pointer or reference to the next and the previous nodes in the list. It is one of the simplest way to store a collection of items.

> In this lesson we cover how to create a doubly linked list data structure and how to use its strengths to implement an O(1) FIFO queue + O(1) LIFO stack. We also demonstrate why one would use it over a singly linked list. We also cover how to approach authoring such data structures.

Here we have a singly linked list with a FIFO removal `dequeue` method.

Lets say we wanted to add a last in first out `pop` operation.
* It will return either the last value or undefined if we are out of elements
* We can only pop a value if we still have an active `tail`
* We can grab the value that we want to return from the tail.
* Next we have to do our routine maintenance of the `tail` and `head` nodes.
* Now we have to update the tail to be the second last item in the linked list. To find that in this singly linked list we would need to start from the `head` till we arrive at a node whose `next` is the current `tail`. However such an implementation would be `O(n)` and we want an `O(1)` algorithm.

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

There is a data structure called a `doubly` linked list that would make it trivial to figure out the second last node i.e. the node `previous` to the tail.

```js
undefined <-> node { value, next, prev } <-> node { value, next, prev } <-> undefined
```

Instead of just `value` and `next` we also keep track of any previous node, against each node. Of course, for the head `prev` will be `undefined` and for the `tail` the `next` will be `undefined`.

Lets make this node description concrete and define a `DoublyLinkedListNode` as a generic interface that holds a value and potentially the next and prev nodes.

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

We will have to add a very slight additional maintenance for this new `prev` node reference. On `add` we will create a `DoublyLinkedListNode` and therefore also initialize the `prev` value. Additionally if we have a current `tail`, we continue to update the `next` pointer, but now we also update the `prev` pointer for this new node.

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

The modifications to the dequeue operation are equally simply. After dequeing the current head, if we get a new head value, we simply need to clear the `prev` reference.

```js
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
```

Now with these simple modifications in place, lets revisit adding a LIFO `pop` operation.
* After grabbing the value from the current tail, we simply update the tail to point to the current tail's previous node.
* If the tail will be no more we also clear the head.
* Otherwise we update this new tail to have no `next` essentially poping the old tail.
* We finally return the value we read from the old tail.

```js
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
```

It is worth mentioning, that as long as you understand what a `node` means in your data structure, and appreciate the fact that you need to maintain the `value/prev/next` members in your data structure operations, you don't need to memorize the code bodies.

An interesting fact in this doubly linked list is that our `pop` method is actually a straight copy of the `dequeue` operation, with a simple change of `head` to `tail`, `prev` to `next` and `next` to `prev`.

The main advantage of using a `DoublyLinkedList` is that any operations that require constant `next` and `prev` reference manipulations, can be implemented with `O(1)` time complexity. In this example it allowed us to implement a FIFO Queue, and a LIFO Stack operation, in a single data structure with an `O(1)` time complexity.
