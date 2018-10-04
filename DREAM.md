# In Queue
As I record more videos they get put in a publish queue. Once released I will move them up.

* Graphs
  * Graph representation (adjacency matrix vs. adjacency list)
  * Depth First Search
  * Breadth First Search
  * Binary Search Tree
* A hot cache of the 100 last requested items
* Format bytes to `KB, MB, GB, TB` : https://stackoverflow.com/a/18650828/390330
* Two Sum : Find the pairs of numbers in an array that sum up to a particular value. Ans: Solve using a hashmap.
* k Smallest items: Naive is full sort O(nlogn). Better is to use heap. 
  * Put first k items in a heap. (O k.log(k))
  * For remaining n-k items.
    * If item is larger than heap root then ignore it
    * Else If item is smaller than heap root then pop the heap root and heap-insert this item (log.k as heap only has k items)
  * Assuming we have to pop item on each `n-k` items we end up with O(k.log(k) + (n-k)log(k))
* K closest points to origin: Objective is to know distance as `sqrt(x**2 + y**2)`. Once you have the distances, it reduces to k smallest items.


# Sort using a single operator `>` (instead of `> & = & <`)
Solution. A `comparator` gives us the follwing `compare` function:
```
comparator(a,b) ? -1
: comparator(b,a) ? 1
? 0
```

# Reverse a string 
Native:
```
str.split('').reverse().join('')
```
Without using `reverse` you swap first with last, second with second last and so on:
```
arr = str.split();
for i 0 to arr.length 
  [arr[i],arr[arr.length-i]] = [arr[arr.length-i],arr[i]]
str = arr.join('');
```

# Reverse Words in a String 
Simplest way is to reverse the string followed by spliting into words by `split(' ')` and then reverse back each word in place. 

# Cycle in a linked list 
> Note: intenionally poorly worded question. A linked list doesn't have cycles. What they mean is a graph where each node has at most one outgoing edge. 

Solution is "tortoise and hare algorithm".

```
slow
fast 
while(true)
   slow = slow.next;
   fast = fast.next.next; 
   if (slow == fast)
      return "cycle"
   if (end of graph) 
      return "no cycle"
```


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

Now run `inverse(inverse, inverse)`
- if it doesn't terminate, implies *if* block executed implies `willItTerminate(inverse, inverse)` said `true`, But we are running `inverse(inverse)` and its not terminating. `willItTerminate` has therefore given the *wrong* answer.
- if it terminates implies *else* means `willItTerminate(inverse, inverse)` said `false`. So essentially `willItTerminate` would have to give the wrong answer.

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
Deploy as simple lessons. Once there are enough make a new course.

## Edit distance
Given two text strings A of length n and B of length m, you want to transform A into B with a minimum number of operations of the following types: delete a character from A, insert a character into A, or change some character in A into a new character. The minimal number of such operations required to transform A into B is called the edit distance between A and B.

## Others.
