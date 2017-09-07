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

The formula for a diverging geometric series is TODO

Maximum depth is `O(logn)`
