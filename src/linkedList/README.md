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
  next?: LinkedListNode<T>
}
```

Now we can model a linked list as a generic class for values of type `T` and all that we really need is to store the reference to the `head`

```js
/**
 * Linked list for items of type T
 */
export class LinkedList<T> {
  public head?: LinkedListNode<T> = undefined;
}
```

Although this works, it puts the burden of keeping track of the `head` on the users of this class. We can easily provide a utility, `enqueue` method that adds an item to the linked list.

* To make it easy to enqueue an item in O(1) we should track the current tail of the linked list, so we add a member for that. In general it is useful to keep track of both ends of a linked list i.e. the head and the tail.
* Now we add the enqueue method, that takes a value of type `T`.
* We simply create a linked list node using this value. Since it will be the new tail we point next to undefined.
* If this is the first node that we are seeing point our head to this node.
* If we already have a tail node, its `next` should be updated to point to this new node.
* Finally we set this new node as our current `tail`.
```js
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
```

Now if we wanted we can easily provide a method that generates an iterator over all the values in the list.
* We start with the head, which demonstrates a good reason to have a reference to the head.
* While we have a current item, we simply yield its value.
* Next we update our current to the next values which may or may not be there.

```js
/**
 * Returns an iterator over the values
 */
*values<T>() {
  let current = this.head;
  while (current) {
    yield current.value;
    current = current.next;
  }
}
```

* As an example let's create a linked list of numbers
* Lets enqueue a few items.
* Now we go ahead and iterate over the values
* and log them out.
* you can see that they match what we enqueued.

```js
const list = new LinkedList<number>();
[1, 2, 4, 8].map(x => list.enqueue(x));
for (const item of list.values()) {
  console.log(item);
}
```

As an exercise we can easily add a dequeue operation to the linked list which also operates in O(1).
* It will either return a value or `undefined` if we are out of values.
* If we don't have a head, then we will let the default return value of `undefined` handle it.
* otherwise we grab the value from our `head`.
* update our head to the next value.
* if our new head is undefined, it means we are out of items and should update our tail to match.
* finally with our maintainance of `head` and `tail` out of the way we simply return the stored value.

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
    return value;
  }
}
```

This example demonstrates the real beauty of a linked list. Any such operations that only require simple `next` reference manipulation, can be implemented in to have `O(1)` runtime.
