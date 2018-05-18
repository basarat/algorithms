# In Queue
As I record more videos they get put in a publish queue. Once released I will move them up.

* median maintainance
* Graphs
  * Graph representation (adjacency matrix vs. adjacency list)
  * Depth First Search
  * Breadth First Search
  * Binary Search Tree
* A hot cache of the 100 last requested items
* Format bytes to `KB, MB, GB, TB` : https://stackoverflow.com/a/18650828/390330


# Sort using a single operator `>` (instead of `> & = & <`)
Solution. A `comparator` gives us the follwing `compare` function:
```
comparator(a,b) ? -1
: comparator(b,a) ? 1
? 0
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
Deploy as simple lessons. Once there are enough make a new course.

## Edit distance
Given two text strings A of length n and B of length m, you want to transform A into B with a minimum number of operations of the following types: delete a character from A, insert a character into A, or change some character in A into a new character. The minimal number of such operations required to transform A into B is called the edit distance between A and B.

## Others.
