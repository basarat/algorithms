# Shuffle an array
> Shuffling is a common process used with randomizing the order for a deck of cards.
The key property for a perfect shuffle is that each item should have an equal probability to end up in any given index.
> In this lesson we discuss the concept behind the simple modern fisher yates shuffle and implement it in JavaScript / TypeScript.

The key property of a perfect shuffle is that each item should have an equal probability to end up in any index i.e. for `n` positions, each item should have `1/n` probability for any given position.

```js
`
For "n" positions,
  probability of any given item appearing at any given index
=> 1/n
`
```

* Before we jump into code, lets run through an example of the algorithm that we are going to implement.
* Lets say we have items `abcde`
* The algorithm is simply going to pick a random item, put it in position 0,
then, randomly pick any of the *remaining* items and put that in position 1, and then, randomly pick any of the remaining items and put that in position 2, and so on till we have shuffled all the items.

```js
`
a b c d e
c
c b
c b e
c b e a
c b e a d
`
```

It is actually very easy to do mathematical analysis of this algorithm and prove its correctness.
* Lets say we have `n` items to shuffle.
* If we randomly pick an element and move it to position `0`, it will imply that each item has an equal `1/n` probability of being in position `0`.
* Now the probability of any element making its way to position `1` is equal to
  * The probability of it not making its way to the `0` position, which is `(n-1 / n)`, times, the probability of it making its way to position `1`, which is `1` over the remaining `n-1` items.
  * The n-1's cancel out nicely giving us a probability of `1/n` for the item to appear in position 1
* Similarly for position `2` the probability is
  * `n-1/n` for having skipped position 0
  * `n-2/n-1` for having skipped position 1
  * and `1/n-2` for having made it into position 2
  * and once again all that we are left with after multiplication is `1 / n`
* This process continues for all the remaining positions giving us a uniform `1/n` probability for an item to appear in any given position.
```js
`
[0] 1/n
[1] (n-1)/n * 1/(n-1) => 1/n
[2] (n-1)/n * (n-2)/(n-1) * 1/(n-2) => 1/n
...
[x] 1/n
`
```

With mathematical analysis out of the way, lets discuss a bit of the pseudocode for algorithm.
* We start of with our input array having an empty shuffled portion and a full unshuffled portion
* We then loop through the elements of the array
* In each iteration `i` we simply put random item from the unshuffled portion into the `i`th position hence increasing the length of the shuffled portion.
* This way we eventually end up with a fully shuffled array.
```js
`
[] [unshuffled]

for i of [0 ... length-1]:
  [shuffled] [unshuffled]
            ⇧
            i

[shuffled] []
`
```

Now lets implement this algorithm using TypeScript.
* We bring in our `randomInt` function from a previous lesson.
* We start by creating a generic function which takes an array of type `T` and returns an array of type `T`
* Within the function body, we go ahead and make a copy of the array. Note that if we don't do this, the algorithm can and will essentially operate in-place.
* Next we simply loop through the input array,
* In each iteration, we randomly pick an index from any of the remaining unshuffled items,
* We then do a swap, putting the randomly chosen item into the array's `i`th position.
* And finally we return this shuffled array.

```js
import { randomInt } from '../random/random';

/**
 * Returns a shuffled version of the input array
 */
export function shuffle<T>(array: T[]): T[] {
  array = array.slice();

  for (let i = 0; i < array.length; i++) {
    const randomChoiceIndex = randomInt(i, array.length);
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
  }

  return array;
}
```

***Select entire function***
Shuffling is one of those algorithms where the correct answer is blindingly simple if you have done it before. What we implemented here is called "the modern version of the `fisherYatesShuffle`".

***Select the for loop***
Since it only loops through the array once, it operates in linear time i.e. has `O(n)` time complexity.
