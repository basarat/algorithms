# Max items and max height of a completely balanced binary tree
> A balanced binary tree is something that is used very commonly in analysis of computer science algorithms. In this lesson we cover how to determine the Maximum number of items it can accommodate.

> We follow this with a discussion on the maximum height of a binary tree given we need to accommodate `n` items.


* Consider a perfectly balanced binary tree. In such a tree we never add items to a new level until all the positions in the previous level are filled up.
* We can easily and intutively determine the number of items at a given level as a power of two.
* Level 0 as only 1 item
* Level 1 has 2 items
* Level 2 has 4 items
* and so on
* Now the total number of items in a perfectly balanced binary tree upto a level `n` would simply be the sum of the diverging geometric series with the multiplier is `2`.
```

                O
           ╱       ╲
         ↙            ↘
       O                O
     ↙   ↘           ↙    ↘
   O       O        O       O
 ↙  ↘    ↙  ↘    ↙  ↘    ↙  ↘
O    O   O   O   O    O   O   O

level 0 : 1 (2 ^ 0)
level 1 : 2 (2 ^ 1)
level 2 : 4 (2 ^ 2)
...

2^0 + 2^1 + 2^2 + 2^3 .... + 2^n
=>
```

We could use the formula for a diverging geometric series to find the answer to this sum. However it is not that hard to develop an intuitive understanding.
* Lets make a simple table to keep track of the total number of items upto a given level.
* The 0th level alone has just one node. As a thought experiment, imagine it has 2 items.
* The 1st level has `2` items of its own, combined with 2 items of the previous level, leading to `4` total items.
* The 2nd level would have twice the items in the previous level, so we have `4` items of its own, combined with `4` items of the previous level resulting in `8` total items.
* Really at any given level we will have `2^level` own items + `2^level` items from the previous levels.
* The only trick for the final summation is that we need to remove the additional `1` we imagined on the 0th level.
* We can combine the multiplication of 2 into the power of two
* The (level+1) variable has a nice name called the "height" of the tree leading to a simple formula `2 to the power h - 1`

```
Height of tree  |  Level  |  Items in level      |    Total
     1               0             1  (+1 lie)          2
     2               1             2                    4
     3               2             4                    8
     4               3             8                   16

2^level + 2^level - 1
2*(2^level) - 1
2^(level + 1)  - 1
2^h - 1
```

* We can code this up into a JavaScript function quite easily.
* The function takes a height argument
* And we simply return the value based on the formula we just determined.
```js
/**
 * Returns the max items that can exist in a perfectly balanced binary tree
 */
export function maxItems(height: number) {
  return 2 ** height - 1;
}

```
***Select the result***
* The key take away here is really that the number of items that can exist in a balanced tree increases, exponentially against the height.

Similarly another key fact that should be at the tip of the tongue for an algorithm designer is "given n items placed in a perfectly balanced binary tree, what would be the height of the tree".

* We start off with our derived formula for max items,  against a given height.
* Lets call this n
* Swap over the - 1 to the other side
* and get the max height `h` by taking log2 on both sides.

```js
`
max items in height (h) = 2^h - 1
n = 2^h - 1
2^h = (n + 1)
h = log2(n + 1)
`
```
* Coding up this maxHeight function, is just as easy as coding up the max items function.
* We take the number of items as an argument.
* And return the value as determined by our derived formula.

```js
/**
 * Returns the max height of a balanced binary tree given n items
 */
export function maxHeight(items: number) {
  return Math.log2(items + 1);
}
```
***Select the result***
* The key take away here, is that the max height is logarithmic against the number of items `n` in a balanced tree.

We use this, height is O(log n) fact, when analysing algorithms that depend on the height of the tree e.g. methods of the heap data structure and binary search trees.
