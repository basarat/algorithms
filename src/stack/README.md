# Stack implementation using TypeScript
> A stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements are poped is `Last In First Out` aka. `LIFO`. In this lesson we discuss how to implement it using JavaScript / TypeScript.

We have the contract ....



The objective is to implement these `push` and `pop` operations such that they operate in `O(1)` time. Fortunately in JavaScript implementations, array function that do not require items to move by index, have an average runtime of O(1).

So we can simply implement these operations using an array,
