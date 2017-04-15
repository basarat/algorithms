# Algorithm to determine if a string is a palindrome
> A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. In this lesson we discuss how to approach the palindrome problem using TypeScript / JavaScript.

```js
/**
 * A palindrome is a string that reads the same forward and backward, for example, 
 * - radar, toot, madam.
 * - Write a function that checks if a given string is a palindrome.
 */
```

* We will start by creating our isPalindrome function 

```js
function isPalindrome(str: string) {
}
```

To check a string against it's reverse we will simply
* split the string into an array, 
* reverse the array
* join it back.
* Now that we have the reversed array we can simply check if the reversed value is equal to the original string and return it.
```js
function isPalindrome(str: string) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}
```

```js
import * as assert from 'assert';
assert(isPalindrome('radar'));
assert(isPalindrome('madam'));
assert(isPalindrome('toot'));
assert(!isPalindrome('toots'));
```

A more complex algorithmic challenge is to check if `any permutation of` a given string is a palindrome 

```js
/**
 * - Write a function that checks if any permutation of a given string is a palindrome.
 * civic true
 * vicic true 
 * toot true
 * toto true
 * civil false
 */
```

A simple implementation would be to simply check all the permutations of the string if they are a palindrome 

```js
function isAnyPermutationPalindrome(str: string) {
  return permutations(str).some(isPalindrome);
}
```
However this would be order of n! where n is the number of charcters in the string. 

The insight to a better solution is to realize that a pattern exists among characters of any palindrome string. 
* `civic` is a palindrome it has a `c` on both sides followed by an `i` and an middle v
* The same pattern would hold for any set of characters that can form a palindrome.
* All characters must be paired off. Only 1 character is allowed to be left unpaired.

This reduces our requirement to a simple character counting problem. 

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
* We go through each character in the string 
* If it is in the current unmatched, then great, we can delete it as it is now matched.
* If it isn't we simply add it.
* After we have gone through all the characters we simply check the count of the entries
* And the characters of the string can form a palindrome if the count is 0 or 1.
