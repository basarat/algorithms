# Shuffle an array
> Shuffling is a procedure used to randomize an array. The following is the key property of a good shuffle
> The key property is that each item should have an equal probability to end up in any index.
> In this lesson we discuss the concept behind the simple modern fisher yates shuffle and implement it in JavaScript / TypeScript.

Shuffling is a common process used with randomizing the order for a deck of cards. The key property of a perfect shuffle is that each item should have an equal probability to end up in any index => each item should have `1/n` probability for each index.

```js
`
For "n" positions, probability of any item "a" appearing at any given index "i" => 1/n
`
```

* Lets run through an example of the algorithm that we are going to implement.
* Lets say we have items `abcde`
* The algorithm is simply pick a random item, put it in position 0, pick any of the *remaining* items and put them in position 1, pick any of the remaining items and put them in position 2 and so on.

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

It is very easy to do mathematical analysis of this algorithm and prove its correctness.
* Lets say we have `n` items to shuffle.
* If we randomly pick an element and move it to position `0` it will imply that each item has an equal `1/n` probably of being in position `0`.
* Now the probability of any element making its way to position `1` is equal to
  * It not making its way to the first position, which is `(n-1 / n)`, times, the probability of it making its way to position two, which is `1` over the remaining `n-1` positions.
  * The n-1's cancel out nicely giving us a probability of `1/n` for the item to appear in position 1
* Similarly for position `2` the probability is
  * `n-1/n` for having skipped position 0
  * `n-2/n-1` for having skipped position 1
  * and `1/n-2` for having made it into position 2
  * and once again all that we are left with after multiplication is `1 / n`
* This process continues for all the remaining positions giving us a uniform `1/n` probability for an item appearing in any given position.
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
* We simply loop through the elements of the array
* We start of with an empty shuffled portion and a full unshuffled portion
* In each iteration `i` we simply a random item from the unshuffled portion into the `i`th position hence increasing the length of the shuffled portion.
* We will eventually end up with a fully shuffled array.
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
* We go ahead and make a copy of the array. Note that if we don't do this, we can even implement this algorithm in-place.
* Next we simply loop through the input array,
* In each iteration, we randomly pick an index from any of the remaining unshuffled items,
* We then swap, putting the randomly chosen item into the array's `i`th position.
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

This is one of those questions where the correct answer is blindingly simple if you have done it before. What we implemented here is called "the modern version of the `fisherYatesShuffle`". Since it only loops through the array once, it operates in linear time i.e. has `O(n)` time complexity.
