# Rank Maintainance algorithm implementation using JavaScript / TypeScript
> How can you most efficiently maintain the lowest value in a list of items. How about maintaining the largest value?

> In this lesson we cover a naive solution to this problem followed by an efficent solution that utilizes a datastructure we have already covered before.


```js
/**
 * Maintains a minimum value
 */
export class Minimum {
  data: number[] = [];

  add(item: number) {
    for (let index = 0; index < this.data.length; index++) {
      if (item > this.data[index]) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.push(item);
  }

  extract(): number | undefined {
    return this.data.pop();
  }
}
```

