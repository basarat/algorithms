

How would you keep a running minimum efficiently, in the presence of
* new nodes being inserted.
* changing weights for nodes.

You could use an array but in the worst case:
* new nodes insertion will be O(n)
* changing the weight for a node will be O(n)

Heaps provide the solution for this with O(logn) time complexity.

Also heap sort O(nlogn).
