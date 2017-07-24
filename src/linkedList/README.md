# Implement a singly linked list in TypeScript
> In a singly linked list each node in the list stores the contents of the node and a reference (or pointer in some languages) to the next node in the list. It is one of the simplest way to store a collection of items.
> In this lesson we cover how to create a linked list data structure and how to use its strengths to implement an O(1) FIFO queue.

A linked list is simply, a list of nodes. Each node has a value, and a link to a next node in this list, till we arrive at the end of the list where `next` will be `undefined`.

`node {value,next} -> node {value,next} -> undefined`

The linked list data structure itself simply maintains the `{head}` node.
**Select the `node {value}`**

Now, the trick to writing a linked list, and really *any* data structure with a concept of a `node` e.g. a Binary tree, is to first define a `node`.

So now lets jump into TypeScript and define what we mean by a node.
* We go ahead and create a generic interface for the LinkedListNode.
* We have a `value` member where we store the value
* And then we have an optional pointer to any `next` node.

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

Although this class can be considered complete, it puts the burden of doing safe manipulation of `next` pointers on the users of this class. We can easily provide a utility `add` method, that lets our users add an item to the linked list.

* To make it easy to add an item in O(1) we should track the current tail of the linked list, so we add a member for that. In general it is useful to keep track of both ends of a linked list i.e. the head and the tail.
* Now we create the add method, that takes a value of type `T`.
* We simply create a linked list node using this value. Since this node will be the new tail we point next to undefined.
* Now, if this is the first node that we are seeing we will also initialize our head.
* Additionally, if we already have a tail node, its `next` should be updated to point to this new node.
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

Great, so now our users can easily and safely add items to the linked list.

As an added convenience to our users, we can also provide a method that generates an iterator over all the values in the list.
* We start with the head, which demonstrates a good reason to have a reference to the head.
* And within a while loop, as long as we have a current item, we simply yield its value.
* Finally we update our current to the next value in the linked list which may or may not be there.

```js
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
```
Now lets demonstrate this function in action,
* We go ahead and create a linked list of numbers
* We add a few numbers to the list.
* Next we simply iterate over the values from the linked list.
  * and log them out.
* you can see that the values returned from the list match what we added.

```js
const list = new LinkedList<number>();
[1, 2, 4, 8].map(x => list.add(x));
for (const item of list.values()) {
  console.log(item);
}
```

As a final exercise we can easily add a FIFO dequeue operation to the linked list which also operates in O(1).
* It will either return a value or `undefined` if we are out of values.
* We will only return a value while we still have a valid `head` reference.
* We grab the value from our `head`.
* update our head to be the next value.
* if our new head is `undefined`, it means we will be out of items after this `dequeue` and should update our tail to match.
* finally with our maintainance of `head` and `tail` out of the way we simply return the retrieved value.

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

This example demonstrates the real beauty of a linked list. Any operation that only requires a constant number of `next` reference manipulations, can be implemented in such a way to have `O(1)` runtime.
