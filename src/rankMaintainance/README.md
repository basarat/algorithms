# Rank Maintainance algorithm implementation using JavaScript / TypeScript
> How can you most efficiently maintain the lowest value in a list of items. How about maintaining the largest value?

> In this lesson we cover a naive solution to this problem followed by an efficent solution that utilizes a datastructure we have already covered before.


```js
/**
 * Maintains a minimum value
 */
export class Minimum {
  data: number[] = [];

  /**
   * O(n)
   */
  add(item: number) {
    for (let index = 0; index < this.data.length; index++) {
      if (item > this.data[index]) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.push(item);
  }

  /**
   * O(1)
   */
  extract(): number | undefined {
    return this.data.pop();
  }
}
```

```js
/**
 * Maintains a maximum value
 */
export class Maximum extends Minimum {
  add(item: number) {
    for (let index = 0; index < this.data.length; index++) {
      if (item < this.data[index]) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.push(item);
  }
}
```

```js
const maintain = new Minimum();
[1, 4, 2, 5].forEach(x => maintain.add(x));
let curr = maintain.extract()
while (curr != null) {
  console.log(curr);
  curr = maintain.extract();
}
```
We can also run for maximum and it works as expected.
***Refactor Minimum to Maximum***
* As you can see it works as expected.

***Select the `forEach` loop***
The complexity of this whole *add* remove cycle is driven by the complexity of the `add` operation which is `O(n)`. Doing that for n items results in an `O(n^2)` time complexity. We can do better.

The simple trick here is to remember that there is a data structure desgined for the specific problem of *reapeated minimum or maximum compuatations* called the heap.

```js

```

