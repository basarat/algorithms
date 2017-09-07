# Max items in a completely balanced binary tree
> A balanced binary tree is something that is used very commonly in analysis of computer science algorithms. In this lesson we cover how to determine the Maximum number of items it can accomodate.

> We follow this with a discussion on the maximum depth of a binary tree.


It is (2^h - 1). The items in each level are.

```
1 (2 ^ 0)
2 (2 ^ 1)
4 (2 ^ 2)
...

2^0 + 2^1 + 2^2 + 2^3 .... + 2^n
=>
```

We could use the formula for a diverging geometric series. However it is not that hard to develop an intuitive understanding.

* The first level alone has just one node. As a though experiment, imagine it has 2 items.
* The second level has `2` items of its own, combined with 2 items of the previous leading to `4` total items.
* The third level would have twice the items in the previous level so we have `4` items of its own, combined with `4` items of the previous level resulting in `8` total items.
* Really at any given level we will have `2^level` own items + `2^level` items from the previous levels.
* The only trick is that `1` we imagined at the previous level, so the net is simply

```
2*(2^levels) - 1
```

Maximum depth is `O(logn)`
