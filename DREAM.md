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
* Pre-Reading stuff from : https://basarat.gitbooks.io/algorithms/content/: 
  * Powers of 2 
  * infinity 
  * Stack 
  * Queue 
  * Shuffling
 * Pre-Reading: 
  * Number of Permutations 
  * Number of Combinations 
  * Sum of converging geometric series. 
  


# Sort using a single operator `>` (instead of `> & = & <`)
Solution. A `comparator` gives us the follwing `compare` function:
```
function comparator(a,b) { if (a > b) return true }
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

## Knapsack problem 
Pretty famous. 

Statement: You have n items, each (`i` item) with `[weight(i),value(i)]` and a knapsack that can only hold maxWeight `W`. Which items should you put in the knapsack to get the maximum value possible. Assumptions: weight and value are both non-negative integers.

### Naive Solution
Try all items one by one. Complexity: You have `n` items each either in or out, so there are 2^n solutions you have to try. 

### Dynamic programming solution
> S(i,x) is optimal solution for first `i` items with max allwed weight `x`. 

Notice that, in an optimal solution of the first `i` items (set `S(i, x)`): 
* item `i` will not be in the knapsack:
  * if `S(i, x)` is also the optimal solution for `S(i-1, x)` 
* item `i` will be in the knapsack:
  * Then `S(i, x) - i` (set of first i item without considering i) is the optimal solution for `S(i-1, x-w(i))`

So we have the recurrance (`V(i,x)` is the optimal value for first `i` items given a weight limit `x`): 

```
V(i,x) = max {
   V(i - 1, x), 
   V(i - 1, x - w(i)) + v(i) (if weight allows)
 }
```

Since we have `i` and `x` we need to do a double for loop, for each `i` for each `x`. The value at `i,x` depends on previous values (`i - 1` and `i-1, x - w(i)`. 

Runtime `O(n*W)` 

> Note: Algorithm is still exponential as you can construct wieght `w(1) = 1, w(2) = 2, w(3) = 4 ...` such that for `n` items you have to do `n*2^n` calculations. But as exponential (in this case np complete) problems go, this is considered the easiest.

## Others.

# Pre-Reading 
## Permutation
> Collection of items when order matters. Commonly comes up in "how many sub-arrays" (as order matters in arrays).

You can organize `n` items in `n!`. Easy to prove e.g. 5 chairs / 5 people: 

```
seat(1) =                              5 possiblities 
seat(2) = for each of the 4 remaining, 4 possibilities 
seat(3) = for each of the 3 remaining, 3 possibilities 
seat(4) = for each of the 2 remaining, 2 possibilities 
seat(5) = for each of the 1 remaining, 1 possibilities 
```
So total possibilities = 5 * 4 * 3 * 2 * 1

If we are limited to `r` items we simply have to remove the remaining `r!` possibilities, e.g. 5 people 2 chairs: 

```
5! 
  /
    3 * 2 * 1
```
So 
```
P(n,r) = n! / (n-r)!
```

## Combintations 
> Collection of items when order doesn't matter. Commonly comes up in "how many sub-sets" (as order doesn't matter in sets).  

From the permutations `P(n,r)` simply remove all the permuations of `r` items. Simples: 
```
C(n,r) = n! 
            /  
               (n-r)! * r!
```
