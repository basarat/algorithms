# In Queue
As I record more videos they get put in a publish queue. Once released I will move them up.

* Fisher Yeats Shuffle
* Priority Queue
* Graphs
  * Graph representation (adjacency matrix vs. adjacency list)
  * Depth First Search
  * Breadth First Search
  * Binary Search Tree
* A hot cache of the 100 last requested items
* Create a dictionary:
  * Quite commonly beginners will simply {}. Don't do that because it has prototype methods e.g. "toString"
  * Lets implement `hasKey` and show and example where it will go horribly wrong.
  * Reason is that `toString` exists on the object prototype `({}).toString === Object.prototype.toString`
  * The propery way to create an object for useage as a dictionary is to use `Object.create(null)`

