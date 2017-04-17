# Algorithm to determine if two strings are an anagram
> The anagram test is commonly used to demonstrate how an naive implementation can perform significant order of magnitudes slower than an efficient one.
> A word is an anagram of another if you can rearrange its characters to produce the second word. Here we write a function that given two strings determines if they are anagrams of each other.


```js
/**
 * A word is an anagram of another if you can rearrange its characters to produce the second word.
 * Given two strings determine if they are anagrams of each other.
 * - 'earth' and 'heart' are anagrams
 * - 'silent' and 'listen' are anagrams
 * - 'foo' and 'bar' are not anagrams
 */
```

* We will start by creating our areAnagrams function

```js
export function areAnagrams(s1: string, s2: string): boolean {
}
```
A plain implementation that derives from the definition would be to
* check all the permutations of s1
* and then see if it is equal to s2
* If they are then the strings are anagrams
* If no permutation matched then they are not anagrams

```js
export function areAnagrams(s1: string, s2: string): boolean {
  for (const permutation of permutations(s1)) {
    if (permutation === s2) return true;
  }
  return false;
}
```
***Select the for line***
* Although such an implementation would work, in this case the complexity of the algorithm will be equal to possible permutations of s1, so order of n! (where n is the number of characters in the string).

***Select the first line of the requirements***
* If you read into the requirements you can realize that instead of doing actual re-arrangments you simply need to check if they have *exactly* the same characters.

***Delete the function body***
One quick way of checking the equality between two sets of characters in strings is simply to
* break the strings into their characters, sort them, and join them again.
* we do the same for the second strings.
* finally we check if the strings are equal.
* if these sorted character strings are equal then the original strings were anagrams.

```js
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  return s1 === s2;
```

***Select the sort function***
* The complexity in this case will be driven by the sort function which is of the order `nLogn`. We can do better.

***Delete the function body***
* A better way to make sure that the strings have the same characters is to simply use a HashMap that counts the characters between the two strings and makes sure this count per character is the same between the strings

```js
export function areAnagrams(s1: string, s2: string): boolean {
  const charCount = new Map<string, number>();
  for (const char of s1.split('')) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of s2.split('')) {
    if (!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
  }
  return Array.from(charCount.values()).every(val => val === 0);
}
```
* We start by creating a map to track this character count. We initialize it to a map with string keys and number values.
* We go ahead and iterate through all the characters in string 1.
  * For each character in string 1
  * We set the character count for this character.
  * We get the previous value, If there was no previous value we initializing it to 0
  * Finally we increment the previous count by 1.
* We repeat the process for the second string. Iterating through all the characters in the second string.
  * if there is no key for it from string 1. Then we know we don't have an anagram.
  * Otherwise simply decrement the count
* Finally we go through all the values in the characterCount map
  * and simply make sure that every value is 0.
  * This ensures that we saw an equal number of character counts in string 1 (during incrementing) and string 2 (during decrementing).

***Select the implementation***
* Since we are simply looping through the characters in the two strings and doing constant amount of work in each iteration the time complexity of this version is of order n (O(n)) where n is the number of characters in the strings.
