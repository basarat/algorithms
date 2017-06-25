> Coding Interview: FizzBuzz

> The FizzBuzz problem is commonly presented as the lowest level of comprehension required to illustrate adequacy in computer programming.

> In this lesson you learn about the problem as well as its solution in TypeScript. We will also cover some tricks on approaching the problem and coding interview questions in general.

```js
/**
 * Write a program that prints the integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */
```
* The statement for the FizzBuzz problem specifies that you need to print integers from 1 to 100.
* For multiples of 3, instead of the number you should print `Fizz`,
* For multiples of 5, instead of the number you should print `Buzz`,
* And if the number is divisible by both 3 and 5, instead of printing the number, you should print FizzBuzz.

It is always a good idea in a coding interview to do a quick run of expected results without actually writing any code.

Here you would discuss that expected output should be like `1, 2 ,Fizz (instead of 3), 4, Buzz(instead of 5) and so on`

Here you can go ahead and write down the expected results upfront:

```js
/**
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * ...
 */
```
With this understanding in your head. You can jump into the code.

The first requirement is to print numbers from 1 to 101, Just need a for loop

```js
for (let index = 1; index < 101; index++) {

}
```
And then log out the index.
```js
for (let index = 1; index < 101; index++) {
  console.log(index);
}
```
And if we run it you can see the numbers from 1 to 100.

Next requirement is for multiples of 3 print `Fizz`.

We can do that easily with and if else. If index is a multiple of 3 we will print out fizz, else will  print the index same as before.

```js
for (let index = 1; index < 101; index++) {
  if (index % 3 == 0) {
    console.log('Fizz');
  }
  else {
    console.log(index);
  }
}
```
For multiples of 5 print Buzz.
Just another else if to check if its a multiple of 5 and we log out Buzz.
```js
  if (index % 3 === 0) {
    console.log('Fizz');
  }
  else if (index % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(index);
  }
```
Now for the final condition, ... yada yada

Following our previous pattern `if (index % 3 === 0 && index % 5 === 0)` you might be tempted to do another else if to check for multiple of 3 and 5 and log out FizzBuzz.

However you should realize that if any of the previous conditions are true, then this combined condition check will never execute. So we simply move this combined condition on top.

The program specification is intentionally ordered this way to catch unaware programmers off guard but fortunately you will not be one of them.

```
if (index % 3 === 0 && index % 5 === 0) {
  console.log('FizzBuzz');
}
```

If we run the application you can see that it is a working solution to the FizzBuzz problem logging out `Fizz` `Buzz` and `FizzBuzz` as required.

```js
for (let index = 1; index < 101; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if (index % 3 === 0) {
    console.log('Fizz');
  }
  else if (index % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(index);
  }
}
```

* A common additional request is to only do the multiple detection math once.
* It is quite easy to do by simply move moving out these Fizz and Buzz detection experssions and storing there results in semantically named variables `isFizz` and `isBuzz`. Next we use these variables in our code.

```js
for (let index = 1; index < 101; index++) {
  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  if (isFizz && isBuzz) {
    console.log('FizzBuzz');
  }
  else if (isFizz) {
    console.log('Fizz');
  }
  else if (isBuzz) {
    console.log('Buzz');
  }
  else {
    console.log(index);
  }
}
```

* Another common additional request is to remove the `console.log` duplication.

* You can do that by creating a variable for the result
* and then storing the result in this variable for each condition
* And finally logging out the result variable;

```js
for (let index = 1; index < 101; index++) {
  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  let result;
  if (isFizz && isBuzz) {
    result = ('FizzBuzz');
  }
  else if (isFizz) {
    result = ('Fizz');
  }
  else if (isBuzz) {
    result = ('Buzz');
  }
  else {
    result = (index);
  }
  console.log(result);
}
```

Another thing the interviewer might request is to remove the mutation of the `result` variable and present a solution with a more functional approach. They might even give you the hint to use the `conditional ternary` operator.

* An `if/else` chain with only single assignment statements can easily be converted into a ternary chain.

* We will go ahead and assign the result to an expression driven by the conditional ternary operator

* If bla bla then bla bla otherwise check bla bla then bla bla otherwise

* And now since there is no lazy assignment to the `result` variable we can make it a `const` as well.

```js
for (let index = 1; index < 101; index++) {
  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  const result =
    isFizz && isBuzz
      ? 'FizzBuzz'
      : isFizz
        ? 'Fizz'
        : isBuzz
          ? 'Buzz'
          : index;
  console.log(result);
}
```

* And the code still behaves the same way as before.
