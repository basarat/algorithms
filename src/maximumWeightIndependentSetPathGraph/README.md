# Maximum Weight Independent Set in a Path Graph implementation in JavaScript / TypeScript

> The maximum wieght independent set in a path graph is an easy problem to tackle with dynamic programming.

> In this lesson we cover an example of how this problem might be presented and what your chain of thought should be to solve this problem efficiently.


```js
`
  v0    v1    v2    v3
 ( ) - ( ) - ( ) - ( )
`
```
* We start off with path graph. A simple description of a path graph is a graph in which there is a single path from the head to the tail of the graph.
* A path graph can be directed or indirected, we just assume its an undirected connected graph.

```js
`
 (1) - (4) - (5) - (4)
 [1, 4, 5, 4]
`
```

* For the weighted independent set problem the graph vertices have some weights associated with them.
* A great property of a connected path graph with vertix weights only, is that it can be represented as a simple number array.

```js
`
 * [v0]
 * [v0, v2]
 * [v0, v3]
`
```
* An independent set of vertices from this graph would be the set of vertices that are not connected to each other. E.g. the independent sets including the vertex 0 would be.


```js
`
Max:
* [v1 , v4]  => 4 + 4 => 8
`
```

* For the maximum weight independent set, we want the indepent set where the sum of the vertex weights is as large as possible.
* For this simple graph we can do this easily as its the vertex 1 and 4 with the sum 8.


```js
`
max(i) = max(i - 2) + val(i) >= max(i - 1)
          ? max(i - 2) + val(i)
          : max(i - 1)
`
```
* A key observation about this problem is optimal substructure. A solution from `0 to i` that involves vertex i would be optimal only if the sum of `0 to i-2` + `vi` is greater than the optional solution `0 to i-1`.
* In this way the solution to problem `i` only depends on solutions to problems (`i-1` and `i-2`).
* Once again the problem can easily be solved *given* someone gives us the pre-solved answer to a subset of the problem. We can thus apply dynamic programming using our standard iterative, table based problem solving approach.

```ts
`
Vertex  |  val(i)  |  max(i)
-----------------------------
  v0    |     1    |    1
  v1    |     4    |    4
  v2    |     5    |    6
  v3    |     4    |    8
`
```
* Lets solve the example array by hand with a simple table.
