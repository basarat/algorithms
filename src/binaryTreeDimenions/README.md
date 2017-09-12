# Max items and max height of a completely balanced binary tree
> A balanced binary tree is something that is used very commonly in analysis of computer science algorithms. In this lesson we cover how to determine the Maximum number of items it can accomodate.

> We follow this with a discussion on the maximum depth of a binary tree.


It is (2^h - 1). The items in each level are.

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

We could use the formula for a diverging geometric series. However it is not that hard to develop an intuitive understanding.

* The first level alone has just one node. As a thought experiment, imagine it has 2 items.
* The second level has `2` items of its own, combined with 2 items of the previous leading to `4` total items.
* The third level would have twice the items in the previous level so we have `4` items of its own, combined with `4` items of the previous level resulting in `8` total items.
* Really at any given level we will have `2^level` own items + `2^level` items from the previous levels.
* The only trick is that we need to remove the `1` we imagined at the first level
* We can combine the multiplication of 2 into the power of two
* And really level +1 has a nice name called the "height" of the tree.

```
Height of tree  |  Level  |  Items in level      |    Total
     1               0             1  (+1 lie)          2
     2               1             2                    4
     3               2             4                    8
     4               3             8                   16


2*(2^level) - 1
2^(level + 1)  - 1
2 ^ h - 1
```

* Lets code it up. It is fairly simple:
* We create a function that takes a height
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
* The key take away here is really that the number of items in a tree increases exponentionally against the height.

Similary another key fact that should be at the tip of the tongue for algorithm designers is "given n items, what would be the height of the tree".

```
max items in height (h) = 2^h - 1
n = 2^h - 1
2^h = (n - 1)
h = log2(n - 1)
```
* Coding it up is just as easy as coding up the max items function.
* We take the number of items
* And return the value as determined by our derived formula.

```js
/**
 * Returns the max height of a balanced binary tree given n items
 */
export function maxHeight(items: number) {
  return Math.log2(items - 1);
}
```
***Select the result***
* The key take away here is really that the height is logrithmic against the number of items `n` in a tree.

We use this, height is O(log n) fact, when analysing algorithms that depend on the height of the tree e.g. methods of the heap data structure and binary search trees.
