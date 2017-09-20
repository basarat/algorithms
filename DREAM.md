# In Queue
As I record more videos they get put in a publish queue. Once released I will move them up.

* Graphs
  * Graph representation (adjacency matrix vs. adjacency list)
  * Depth First Search
  * Breadth First Search
  * Binary Search Tree
* A hot cache of the 100 last requested items


# Sort using a single operator `>` (instead of `> & = & <`)
Solution. A `comparator` gives us the follwing `compare` function:
```
comparator(a,b) ? -1
: comparator(b,a) ? 1
? 0
```

# Heap

## More on Heaps
How would you keep a running minimum efficiently, in the presence of
* new nodes being inserted.
* changing weights for nodes (or simply extracting the minimum).

You could use an array but in the worst case:
* new nodes insertion will be O(n)
* changing the weight for a node will be O(n)

Heaps provide the solution for this with O(logn) time complexity.

### Median Maintainance
Give you numbers one by one, after giving you each item, I will ask you the current median.
* after I give you the 5th, tell me the 3rd smallest
* after I give you the 13th, tell me the 7th smallest

Want the median at a given point *as fast as possible*.

Simple solution: Insert O(1) just add to end. You can do a linear scan at each point and do a selection, That would be O(n).

Another solution: You can insert in a sorted manner each new item, this might cost you `O(n)` for each new item. You can simply return the middle item `O(1)`. But the total cost of *insert and get median* is still O(n)

We can do better.

Two heaps, one low max-heap and one high min-heap. Keep evenly distributed e.g for 20 items, Lowest 10 in H-low and Highest 10 in H-high. For odd you can put in either, lets put in H-low.

```js
H(low)  and  H(high)
```

The median is
- if (even `low.peek()` `high.peak()`) else (`low.peek()`).

At point 21 we have

```js
  H-low            H-high
11 lowest        10 largest
```

For insertion we simply check
- if new <= low.peak() belongs in low
- else belongs in high

But we need to fix the imbalance if it goes into `low`, We simply rebalnce by extract max from low heap and put in high heap.

# Halting

> Can you create a program to determine if a given program will terminate on a given input.

Its appreciation of the fact that there are some problems that cannot be solved for the general case using computers.

The main limitation here is that any turning complete system (like a modern computer) cannot be completely analyzed by another turning complete system.

Consider such a program

```js
willItTerminate(program, input)
  -> true : It will terminate
  -> false : It will ∞ loop
```

You can easily write
```js
inverse(program, input)
  if willItTerminate(program, input):
    ∞ loop
  else
    return
```

Now run `inverse(inverse)`
- if it terminates implies *else* means `willItTerminate(inverse, inverse)` said `false`. So essentially `willItTerminate` would have to give the wrong answer.
- if it doesn't terminate, implies *if* block executed implies `willItTerminate(inverse, inverse)` said `true`, But we are running `inverse(inverse)` and its not terminating. Again `willItTerminate` would have failed us.

Therefore the only logical conclusion is that we have made a wrong assumption, the only assumption we have made is that `willItTerminate` is a function that exists. And therefore this assumption is wrong and a function like `willItTerminate` cannot exist.

Such problems are called *undecidable* and `will a program halt or not` is just the most famous one.


### Powers of 2
```js
console.log(2 ** 10); // ≈ 1000
console.log(Math.log2(1000)); // ≈ 10
console.log(Math.log2(1000000)); // ≈ 20
console.log(Math.log2(1000000000)); // ≈ 30
```

# Dynamic Programming
The key question is "If we have a solution for a smaller problem aka (n-1), would we be easily able to deduce the answer for n?

## Maximum subarray
https://en.wikipedia.org/wiki/Maximum_subarray_problem
