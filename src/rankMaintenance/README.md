# Rank Maintenance algorithm implementation using JavaScript / TypeScript
> How can you most efficiently maintain the lowest value in a list of items. How about maintaining the largest value?

> In this lesson we cover a naïve solution to this problem followed by an efficient solution that utilizes a data structure we have already covered before.


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
const maintain = new MinimumArray();
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

***Delete both classes***
In fact using a heap is so simple that we will not even bother wrapping it in a class.

* We simply import the heap data structure.
* Use it for our maintainance passing in a comparison function that sorts in ascending order, giving us a minheap.
* And use its extract root
* When we run it, you can see that it works as expected.
```js
import { Heap } from '../heap/heap';

const maintain = new Heap<number>((a, b) => a - b);
[1, 4, 2, 5].forEach(x => maintain.add(x));
let curr = maintain.extractRoot()
while (curr != null) {
  console.log(curr);
  curr = maintain.extractRoot();
}
```
***Select the `add` method***
But now the `add` operation is `log (n)` therefore the total runtime has gone from `n squared` to `O (n logn)`.
