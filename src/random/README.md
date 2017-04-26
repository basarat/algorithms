# Random numbers in JavaScript

You can get random number in O(1) (for asymptomatic analysis).

JavaScript Math.random provides you with a random floating point number between range [0, 1). To get an integer just use the following function:


```js
function random(floor:number, ceiling:number) {
    return floor + Math.floor(Math.random() * (ceiling - floor + 1));
}
```

* + floor ensures its at least floor and then we just generate a random number between [ 0 -- (ceiling - floor + 1) ).

Math.random is pseudo-random but good enough for most cases. For true randomness (entropy pool version) and security critical applications you need something like NodeJS crypto.

Operating systems generally have an entropy pool (using user input / cpu usage etc) that they provide to programs that need them (either natively or through the virtual machine of your language).

Modern CPUs also have a built in entropy generator e.g. intel IVY bridge and later CPUs have `RDRAND` instruction, however your operating systems may or may not use such instructions.

