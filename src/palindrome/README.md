# Algorithm to determine if a string is a palindrome
> A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. In this lesson we discuss how to approach the palindrome problem using TypeScript / JavaScript.

> We also discuss a more complex algorithmic challenge of writing a function to check if *any permutation* of a given string is a palindrome.

```js
/**
 * @module Palindrome solvers
 * A palindrome is a string that reads the same forward and backward, for example,
 * - radar, toot, madam.
 */

/**
 * Returns true if the string is a palindrome
 */
```

* We will start by creating our isPalindrome function
* It takes a string and returns a boolean
* To check if a string is a palindrome we need to check it against its reverse
* To get the reverse of a string we
  * split the string into an array,
  * reverse the array.
  * join back the reversed array.
* Finally we simply check if the reversed value is equal to the original value and return it. If so the original string would be a palindrome.

```js
export function isPalindrome(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}
```

A more complex algorithmic challenge commonly presented after isPalindrome, is to write a function to check if `any permutation of` a given string is a palindrome

```js
/**
 * Returns true if any permutation of the string is a palindrome
 * civic true
 * vicic true
 * toot true
 * toto true
 * civil false
 */
```
* e.g. `civic` is a palindrome. So any permutation of it e.g. `vicic` would also be allowed.
* Same for toot and toto.
* No permutation of the characters of `civil` make a palindrome.


* We start off by creating the isAnyPermutationPalindrome function which takes a string and returns a boolean.
* A simple implementation would be to simply check all the permutations of the string if they are a palindrome
```js
function isAnyPermutationPalindrome(str: string): boolean {
  return permutations(str).some(isPalindrome);
}
```


***Select the implementation***
However, in this case the runtime complexity will be driven by the permutations function which of n! where n is the number of characters in the string.

***Delete the implementation***
We can do better

***Select the example `civic`***
The insight to a better solution is to realize that a pattern exists among characters of any palindrome string.
* `civic` is a palindrome it has a `c` on both sides followed by an `i` and an unmatched middle v
* The same pattern would hold for any set of characters that can form a palindrome.
* All characters must be paired off. Only 1 character is allowed to be left unpaired.

***Select the `civicl` example***
* The characters of `civil` cannot form a palindrome because it has 2 unpaired characters `v` and `l`.

This reduces our requirement to a simple character pairing problem.

```js
function isAnyPermutationPalindrome(str: string) {
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) unmatched.delete(char);
    else unmatched.add(char);
  });
  return unmatched.size <= 1;
}
```

* We create a set to keep track of our unmatched characters.
* We split the string into its characters.
* For each character:
* If it is in the current unmatched, then great, we can delete it as it is now matched.
* If it isn't we simply add it.
* After we have gone through all the characters we simply check the count of the entries
* The characters of the string can form a palindrome if the count of unpaired characters is 0 or 1.

***Select the implementation***
This implementation simply loops through the characters of a string and does a linear amount of work in each iteration. Therefore its runtime is of the order n where n is the number of characters in the string.
