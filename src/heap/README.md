# Implement the heap data structure using JavaScript
> Heap is a data structure that can fundamentally change the performance of fairly common algorithms in Computer Science.

> The heap data structure is called a heap because it satisfies the heap property. The heap property states, that if P is a parent node of C, then the value of node P is less than the value of node C.

> In this lesson we discuss the key operations of the Heap data structure along with their performance. We then implement the data structure using TypeScript / JavaScript.

* Here we have a graph of nodes `A,B,C,D,E`
* Its nice to have a mental model of a heap as a `complete binary tree`.
* This tree would satisfy the heap property if `A` is less than its children `B` and `C` Similarly `B` is less than its children `D` and `E`.
* Note that if the heap property is satisfied for direct children, it is also automatically satisfied for any indirect children. e.g. A < D and A < E.
* If the heap property is satified by each parent, it implies that the *smallest* item in the tree, has to be the root node.
* The heap data structure is called a heap because it has this heap property.
* ***(Select the tree)*** Also worth mentioning is the fact that since it is a complete binary tree, the maximum number of levels will be of the order `log n` where n is the number of items in the tree.

```
           A
         ↙   ↘
       B       C
     ↙   ↘
    D     E

A < B
A < C
B < D
B < E

A < D
A < E
```

Note that a given set of values can be arranged in multiple ways to satisfy the heap property. E.g.

* Given 4,4,5,6,9
* We can have the following two trees,
* Both are perfectly valid as each node is smaller than all its children.
* The only position that is guaranteed to be the same among all possible heaps with a given set of values, is the root node. The root will always be the item with the smallest value.
```
4,4,5,6,9

Example Tree
           4
         ↙   ↘
       5       4
     ↙   ↘
    6     9

Example Tree
           4
         ↙   ↘
       4       5
     ↙   ↘
    9     6
```

Even though its nice to have a mental model of a heap as a `complete binary tree` with pointers, they are normally implemented as an array. An array provides very low memory overhead and the left and right child nodes can be calculated quite easily.

* Consider the simple array of indexes 0-13.
* It can be *conceptualized* as a tree with indexes corresponding to items of the array. When we are done with the left and right nodes at a level, we start a new level, and consider these indexes as the left and right of items of the previous level. We stop whenever we run out of items in the array.

```
[] = 0,1,2,3,4,5,6,7,8,9,10,11,12,13

                0
           ╱       ╲
         ↙            ↘
       1                2
     ↙   ↘           ↙    ↘
   3       4        5       6
 ↙  ↘    ↙  ↘    ↙  ↘    ↙
7    8   9   10  11  12  13
```

Given a node at index `n`, lets try and figure out a formula to find the index for its left child node. As always, its a great idea to write down a few examples so we can use these to test our formula.
```
left(0) = 1
left(1) = 3
left(3) = 7
```
* The key realization for the formula is that for an item at index `n`, we will essentially have to skip `n` spaces on its right, and one more to arrive at its left node.
* So we arrive at the formula for `left(n)` as `2n+1`. Our examples are all satisfied by this equation.
* The right child node, is simply one plus the left, so its formula is `2n+2`.
* Not only can we traverse the children of such a binary tree by simple math, we can also traverse the parent of a given index, simply by going back from our `left` and `right` formulas.
* We start off with different parent formulas for left and right children.
* From `2n+1` you can see that `left` node indexes must be an odd number, and `2n+2`  means right node indexes must be an even number.
* So at a given index if its even, we use parentRight formula otherwise we use the parentLeft formula.
* With these `left`, `right` and `parent` equations we can easily traverse this array backed binary tree, without needing to have pointers.
```
left(n) -> self + n items on the right + 1
left(n) = n + n + 1 = 2n + 1

left(0) = 2(0) + 1 = 1
left(1) = 2(1) + 1 = 3
left(3) = 2(3) + 1 = 7

right(n) = 2n + 2

parentLeft(n) = (n - 1) / 2
parentRight(n) = (n - 2) / 2

2n + 1 => left is odd
2n + 2 => right is even

parent(n) =>
  n is even => (n - 2) / 2
       else => (n - 1) / 2
```

***Select the line with the array***
This usage of an array as the backing storage is one of the reasons why heaps are extremely popular. Furthermore, pointer traversal can be done with simple math, which can be done very efficiently with bit shifting tricks for powers of two.

We now have enough context to jump into its implementation of heaps excellent O(logn) `add` and `extractRoot` methods. These are the raison d'etre of the heap data structure.

* To allow us to compare two items of type T we need a compare function. This compare function will follow the same semantics as offered by the built in JavaScript `sort` method.

```js
/**
 * Example:
 * function compare(a, b) {
 *  if (a is less than b by some ordering criterion) {
 *    return -1;
 *  } else if (a is greater than b by the ordering criterion) {
 *    return 1;
 *  } else {
 *    return 0;
 *  }
 * }
 */
export type CompareFn<T> = (a: T, b: T) => number
```

We start off by creating a generic class for a `Heap` for items of type T.
* we create a backing data storage as an array for items of type T.
* we have a constructor that accepts a compareFn for items of type T.
* we go ahead and write our `private` node traversal functions
  * One for the left child node.
  * One for the right child node.
  * and finally a traversal to the parent from a given node index which has a different implementation depending on the index being even or odd, as we discussed before.

```js
/**
 * Implements the heap data structure
 * A heap is used as a priority queue
 * Note: The default compare behavior gives you a min heap
 */
export class Heap<T> {
  private data: T[] = [];
  constructor(private compareFn: CompareFn<T>) { }

  private left(nodeIndex: number): number {
    return (2 * nodeIndex) + 1;
  }
  private right(nodeIndex: number): number {
    return (2 * nodeIndex) + 2;
  }
  private parent(nodeIndex: number): number {
    return nodeIndex % 2 == 0
      ? (nodeIndex - 2) / 2
      : (nodeIndex - 1) / 2;
  }
}
```

* lets go ahead and create our `add` method that adds a given element into the heap in O(logn).
* It takes a new item of type T, and we just go ahead and add the item to the end of the array,
* As soon as we do that there may be a violation of the heap property between this new node and its parent. So we will go head and add a `siftUp` operation that makes sure that the smallest node rises to the top of the heap again.
* In each iteration we check if the item at the given index is smaller than its parent.
  * If so, we simply swap the item with its parent, restoring the heap property.
  * In the next iteration we check this new item against its parent.
* The loop terminates when the item is no longer violating the heap property with respect to its parent, or we reach the top in which case the item becomes the new root.

```js
  /**
   * Adds the given element into the heap in O(logn)
   */
  add(element: T) {
    this.data.push(element);
    this.siftUp(this.data.length - 1);
  }

  /**
   * Moves the node at the given index up to its proper place in the heap.
   * @param index The index of the node to move up.
   */
  private siftUp(index: number): void {
    let parent = this.parent(index);
    while (index > 0 && this.compareFn(this.data[parent], this.data[index]) > 0) {
      [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
      index = parent;
      parent = this.parent(index);
    }
  }
```
***Select the add method comment***
Since we only traverse the depth of the tree the `siftUp` operation will be logN, and therefore our `add` operation is also logN.

* The other key operation of the heap is the `extractRoot` method, which retrieves and removes the root element of this heap in O(logn). This root element will be the smallest element in the heap for a min-heap.
* Of course we can only remove an item if there are any items.
* The root we want to return is going to be the first item in the array.
* If we remove this item there will be a hole at the head of the internal array. The best way to really fill this hole is with the last item in the array. That would result in the minimum number of array index changes.
* Now only if the array still contains any items, we move this last item to the head of the array.
* Then, like `add`, we might have an inconsistency that the new root, which we blindly fetched from the end of the array, might be larger than one of its children.
* We fix the inconsistency by moving it down using a `siftDown` routine.
* Finally we return the root.
* Now lets create this siftDown routine. The main objective is to move the biggest value of a triangle `parent, left, right` down to remove a heap violation.
* We will use a utility `minIndex` method which simply returns the index that contains the smaller value among a given `left, right`.
* If the right child index is out of range,
  * we check if the left child index is still in range,
    * if not we return `-1` to signal that we have reached the leaves of the tree,
    * otherwise we return the left child index.
  * else If the right child index is still in range, we simply compare the left and right child values and return the index with the smaller value.
* We kickoff by comparing the left and right nodes of the given index.
* At each point we switch the current node with the smaller of its two children.
* this ensures that the new parent will be smallest in the current `parent,left,right` triangle.
* We simply continue down the tree, till the heap violation is removed i.e. the parent is smaller than its children, or we reach the leaves in which case there are no children and therefore no more heap violation.
* Again the maximum amount of work will be equal to the depth of the tree which is of the order `logN`.

```js
  /**
   * Retrieves and removes the root element of this heap in O(logn)
   * - Returns undefined if the heap is empty.
   */
  extractRoot(): T | undefined {
    if (this.data.length > 0) {
      const root = this.data[0];
      const last = this.data.pop();
      if (this.data.length > 0) {
        this.data[0] = last;
        this.siftDown(0);
      }
      return root;
    }
  }

  /**
   * Moves the node at the given index down to its proper place in the heap.
   * @param nodeIndex The index of the node to move down.
   */
  private siftDown(nodeIndex: number): void {
    /** @returns the index containing the smaller value */
    const minIndex = (left: number, right: number) => {
      if (right >= this.data.length) {
        if (left >= this.data.length) {
          return -1;
        } else {
          return left;
        }
      } else {
        if (this.compareFn(this.data[left], this.data[right]) <= 0) {
          return left;
        } else {
          return right;
        }
      }
    }

    let min = minIndex(this.left(nodeIndex), this.right(nodeIndex));

    while (
      min >= 0
      && this.compareFn(this.data[nodeIndex], this.data[min]) > 0
    ) {
      [this.data[min], this.data[nodeIndex]] = [this.data[nodeIndex], this.data[min]];
      nodeIndex = min;
      min = minIndex(this.left(nodeIndex),
        this.right(nodeIndex));
    }
  }
```


* As a final exercise we can add a `size` method like we do for many of our data structures. In this case we can simply return the length of the underlying array.
* Another useful method to have is `peek` which instead of removing the root, only looks at the value.

```js
  /**
   * Returns the number of elements in the heap in O(1)
   */
  size() {
    return this.data.length;
  }

  /**
   * Retrieves but does not remove the root element of this heap in O(1)
   * - Returns undefined if the heap is empty.
   */
  peek(): T | undefined {
    if (this.data.length > 0) {
      return this.data[0];
    } else {
      return undefined;
    }
  }
```

* Now lets look at an example of this data structure in action.
* we go ahead and create a heap of numbers passing in an ascending order compare function.
* Add a few numbers in,
* We would expect the size to be 3 at this point.
* And we can extract the root,
  * At each point the extracted value is the minimum among the values still left in the heap.
```js
const heap = new Heap<number>((a, b) => a - b);
heap.add(1);
heap.add(3);
heap.add(2);
console.log(heap.size()); // 3

console.log(heap.extractRoot()); // 1
console.log(heap.extractRoot()); // 2
console.log(heap.extractRoot()); // 3
```

Worth mentioning is the fact that a heap can easily be changed into a `max` heap by simply changing the order of the arguments in the `comparison` function just like we did for the sort routines.
```js
const maxHeap = new Heap<number>((b, a) => a - b);
```

There are quite a few use cases where this O(logn) insertion and extract can greatly improve efficiency of simple programming challenges. Basically whenever you see an algorithm requiring repeated minimum (or maximum) computations, consider using a heap.
