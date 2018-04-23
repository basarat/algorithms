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
* A path graph can be directed or indirected, we just assume its an undirected graph.

```js
`
 (1) - (4) - (5) - (4)
`
```

* For the weighted independent set problem the graph vertices have some weights associated with them.

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

A key observation about this problem is optimal substructure. A solution that involves vertex n...
