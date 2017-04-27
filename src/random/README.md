# Random numbers in JavaScript
> Learn how to create random numbers using JavaScript.

JavaScript Math.random provides you with a random floating point number between range [0, 1).

e.g. lets go ahead, loop for a 100 times ands log out the result for Math.random.
```js
for (let index = 0; index < 100; index++) {
  console.log(Math.random());
}
```

You can easily scale this 0 to less than 1 result to any upper limit by simple multiplication. For example if we go ahead and multiply the result with 100, we get random values in the range 0 to less than 100.

```js
  console.log(Math.random() * 100);
```
You can limit this value to an integer if you wanted by simply using `Math.floor`. Values in the range 0 to less than 1 get chopped to 0, in the range 1 to less than 2 get chopped to 1 and soo on till 99 to less than 100 getting chopped to 99.

```js
  console.log(Math.floor(Math.random() * 100));
```

* Now lets go ahead and create a function that should return an int between a start and a before value.
* It takes a start value, a before value.

```js
/**
 * Returns a random int between
 * @param start inclusive
 * @param before exclusive
 */
export function randomInt(start: number, before: number){
}
```

* Within the function we simply slide the value returned by Math.random to be at least the start value.
* And then floor the value returned by math random, after scaling it up to the range before to start.

```js
  return start + Math.floor(Math.random() * (before - start));
```

Math.random is pseudo-random but good enough for most cases. For true randomness (entropy pool version) and security critical applications you need something like NodeJS crypto.

Operating systems generally have an entropy pool (using user input / cpu usage etc) that they provide to programs that need them (either natively or through the virtual machine of your language).

> Modern CPUs also have a built in entropy generator e.g. intel IVY bridge and later CPUs have `RDRAND` instruction, however your operating systems may or may not use such instructions.

You can get random number in O(1) (for asymptomatic analysis) as it is not something whose duration changes based on problem size and random range.
