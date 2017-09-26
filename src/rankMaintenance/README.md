# Minimum / Maximum Maintenance algorithm implementation using JavaScript / TypeScript
> How can you most efficiently maintain the lowest value in a list of items. How about maintaining the largest value?

> In this lesson we cover a naïve solution to this problem followed by an efficient solution that utilizes a data structure we have already covered before.

* Assume that you are given numbers slowly one by one.
* And at any point you can be asked to give numbers back in an ascending order.
```js
`
You are given numbers slowly

add 5
add 2
add 3

Extract the current minimum
2
Extract the current minimum
3

add 1

Extract the current minimum
1
`
```

* We can code this up into a MinimumArray data structure quite easily and intuitively
* We store the data internally as an array
* Whenever we are requested to add an item, we loop through all the existing elements,
  * And simply insert it into the array in descending order.
  * if all the current items in the array were larger we simply add this item to the end.  
* Now since we might end up looping through all the elements in the array, this `add` operation has a time complexity of `O(n)`
* The benefit of keeping the smallest element at the end is simply that we get to `extract` the item in `O(1)`
```js
/**
 * Maintains a minimum value
 */
export class MinimumArray {
  data: number[] = [];

  /** O(n) */
  add(item: number) {
    for (let index = 0; index < this.data.length; index++) {
      if (item > this.data[index]) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.push(item);
  }

  /** O(1)*/
  extract(): number | undefined {
    return this.data.pop();
  }
}
```

* Note that we can simply change this data structure to maintain the maximum value by simply changing the comparison operation in our add method.
```js
/**
 * Maintains a maximum value
 */
export class MaximumArray extends MinimumArray {
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

* Now lets use these classes in a simple sample
* We create a minimum array,
* Add some items into it.
* And iteratively extract the minimum. Logging it out at each point.
```js
const maintain = new MinimumArray();
[1, 4, 2, 5].forEach(x => maintain.add(x));
let curr = maintain.extract();
while (curr != null) {
  console.log(curr);
  curr = maintain.extract();
}
```
***Run the example***
* As you can see it works as expected.

***Refactor Minimum to Maximum***
We can also run this example for the maximum by simply changing which data structure we initialize,
***run***
* and again it works as expected.

***Select the `forEach` loop line in the example***
The complexity of this whole *add* `extract` cycle, is driven by the complexity of the `add` operation which is `O(n)`. Doing that for n items results in an `O(n^2)` time complexity. We can do better.

The simple trick here is to remember that there is a data structure designed for the specific problem of *repeated minimum or maximum computations*. This data structure is called the heap and we have looked at it in a previous lesson.

* In fact the heap data structure is so well suited to this problem, that we will not even bother wrapping it in a class. We simply import the heap data structure.
* Initialize it, passing in a comparison function that sorts in ascending order, giving us a minheap.
* And use its extract root
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
***run it***
* When we run it, you can see that it works as expected.

***Select the `add` method***
The behaviour is similar to the `MinimumArray`, however, now the `add` operation is `log (n)` therefore the total runtime has gone from `n squared` to `n logn`.

**Swap the comparison args**
* As always we can easily change the heap to a max heap by swapping the arguments to the comparison function, giving us the same behavior as maximum array but with better overall time complexity across the sum of `add` and `extract` operations.
