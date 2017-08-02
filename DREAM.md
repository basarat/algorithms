# In Queue
As I record more videos they get put in a publish queue. Once released I will move them up.

* HashMap
* Heap (Priority Queue)
* Graphs
  * Graph representation (adjacency matrix vs. adjacency list)
  * Depth First Search
  * Breadth First Search
  * Binary Search Tree
* A hot cache of the 100 last requested items

# Max items in a completely balanced binary tree
It is (2^h - 1). The items in each level are.

```
1 (2 ^ 0)
2 (2 ^ 1)
4 (2 ^ 2)
...

2 + 2^1 + 2^2 + 2^3 ....
=>
```

The formula for a diverging geometric series is TODO

Maximum depth is `O(logn)`

# Sort using a single operator `>` (instead of `> & = & <`)
Solution. A `comparator` gives us the follwing `compare` function:
```
comparator(a,b) ? -1
: comparator(b,a) ? 1
? 0
```

## More on Heaps
How would you keep a running minimum efficiently, in the presence of
* new nodes being inserted.
* changing weights for nodes.

You could use an array but in the worst case:
* new nodes insertion will be O(n)
* changing the weight for a node will be O(n)

Heaps provide the solution for this with O(logn) time complexity.

Selection sort, pick min and move to top ... repeat `n` times => O(n^2), can be improved by simply using heap sort O(nlogn).

### Median Maintainance
Give you numbers one by one, after giving you each item, I will ask you the current median.
* after I give you the 5th, tell me the 3rd smallest
* after I give you the 13th, tell me the 7th smallest

Want the median at a given point *as fast as possible*.

Simple solution: Insert O(1) just add to end. You can do a linear scan at each point and do a selection, That would be O(n).

Another solution: You can insert in a sorted manner each new item, this might cost you `O(n)` for each new item. You can simply return the middle item `O(1)`. But the total cost of *insert and get median* is still O(n)

We can do better.

```
Two heaps, one low max-heap and one high min-heap. Keep evenly distributed e.g for 20 items, Lowest 10 in H-low and Highest 10 in H-high. For odd you can put in either, lets put in H-low.

```
H(low)  and  H(high)
```

The median is
- if (even `low.peek()` `high.peak()`) else (`low.peek()`).

At point 21 we have

```
  H-low            H-high
11 lowest        10 largest
```

For insertion we simply check
- if new <= low.peak() belongs in low
- else belongs in high

But we need to fix the imbalance if it goes into `low`, We simply rebalnce by extract max from low heap and put in high heap.
