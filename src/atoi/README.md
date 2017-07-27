# Parse a string to an integer
> A common interview question is to write  a function that converts  a  string into an integer e.g. `"123"` => `123`.  This  function  is commonly  called  `atoi` because  we  are  converting  an  ASCII  string  into  an  integer.

> In this lesson we cover the proper way to do this in JavaScript which is `parseInt` along with implementing it using basic ascii math.

A common interview question is to write a function that takes a string and parses it into its integer value. e.g. the string `"123"` to the integer `123`

We start by creating our atoi function that takes a string and returns a number.

```js
/**
 * Converts a string to a integer
 * e.g. "123" => 123
 */
export function atoi(str: string): number {

}
```

Now JavaScript has a function called `parseInt`, that can do this integer parsing for us. Lets run through a few examples of this built in function's behaviour.

* For simple ints we get the int,
* For ints with a negative sign we get a negative int.
* When it encounters a character that is not a numeral, it ignores it and all succeeding characters. It still returns the integer value parsed up to that point, so for "-123Extra" we get -123.
* You can use this fact to ignore decimal portions as well as demonstrated in this example
* Finally if a string does not start with a decimal numeral it returns NaN i.e. Not A Number.

```js
/**
 * Converts a string to a integer
 * e.g. "123" => 123
 */
export function atoi(str: string): number {
  return parseInt(str);
}

console.log(atoi('123')); // 123
console.log(atoi('-123')); // -123
console.log(atoi('-123Extra')); // -123
console.log(atoi('-123.456')); // -123
console.log(atoi('Does not start with a digit 123')); // NaN
```

Note that you can customize the behaviour of parseInt quite easily by wrapping it in a function.

e.g. `parseInt` siliently ignoring invalid trailing characters can be considered a behavior you want to change.

So you can easily implement a more fit for purpose function with a simple regex test that only allows strings containing things that we support e.g. a leading sign followed by any number of decimal digits.

* In all other cases we will return NaN's
* And now all imperfect inputs to the our function will return NaN.

```js
/**
 * Converts a string to a integer
 * e.g. "123" => 123
 */
export function atoi(str: string): number {
  if (/^\-?([0-9]+)$/.test(str))
    return parseInt(str);
  return NaN;
}

console.log(atoi('123')); // 123
console.log(atoi('-123')); // -123
console.log(atoi('-123Extra')); // NaN
console.log(atoi('-123.456')); // NaN
console.log(atoi('Does not start with a digit 123')); // NaN
```

With practical JavaScript training out of the way, when this question is commonly asked, the interviewer might specify that you are not allowed to use `parseInt` or any other built in number parsing functionality. They essentially want to see if you can write a function that is similar to how `parseInt` would be implemented internally.

* First we note down the character point for '0'. This will allow us to convert each decimal digit from a string to its number value.
* Next thing we need to do is parse out the sign. We can store this as sign multiplier.
* Next we create an accumulator for the integer result of parsing the digits
* We go through the string left to right. At each point we update the accumultor as the sum of
 - the current accumulator multiplied by 10
 - and the number value of the current char, which we can get from its distance from the 0 code.
* Finally we return the accumulator multipled by the sign.

If we run through an example with valid inputs you can see that it works as expected.

```js
/**
 * Converts a string to a integer
 * e.g. "123" => 123
 */
export function atoi(str: string): number {
  const zeroCode = '0'.charCodeAt(0);

  let sign = 1;
  if (str[0] === '-') {
    str = str.substring(1);
    sign = -1;
  }

  let acc = 0;
  for (const char of str) {
    acc = acc * 10 + (char.charCodeAt(0) - zeroCode);
  }

  return sign * acc;
}

console.log(atoi('123')); // 123
console.log(atoi('-123')); // -123
```

This answer shows your understanding of basic math, like the fact that the digits represent powers of 10. This solution also shows an understanding of the fact that string digits represent code points that can be diffed to get their integer representation.

The interviewer might additionally ask you about things that can go wrong in this implementation.
* A good one worth mentioning is that we are assuming that the string only has valid digits. They might then ask you to fix that issue, and you can simply check the result of this difference should be in range `0-9`.
