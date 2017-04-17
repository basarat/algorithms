# Algorithm to determine if two strings are an anagram
> The anagram test is commonly used to demonstrate how an naive implementation can perform significant order of magnitudes slower than an efficient one.

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
function areAnagrams(s1: string, s2: string): boolean {
}
```
A plain implementation that derives from the definition would be to
* check all the permurations of s1
* and then see if it is equal to s2
* If they are then the strings are anagrams
* If no permutation matched then they are not anagrams

```js
function areAnagrams(s1: string, s2: string): boolean {
  for (const permutation of permutations(s1)) {
    if (s1 === s2) return true;
  }
  return false;
}
```
***Select the for line***
* Although such an implementation would work, in this case the complexity of the algorithm will be equal to possible permutations of s1, so order of n! (where n is the number of characters in the string).

***Select the first line of the requirements***
* If you read into the requirements you can realize that instead of doing actual re-arrangments you simply need to check if they have *exactly* the same characters.

***Delete the function body***
One simple way of checking the exact same characters is simply to
* break the strings into their characters, sort them, and join them again.
* we do the same for the second strings.
* finally we check if the strings are equal.

```js
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  return s1 === s2;
```

***Select the s1 = s1.spilt line***
* The complexity in this case will be driven by the sort function which is of the order `nLogn`. We can do better.

* A better way to make sure that the two strings have the same characters is to simply use a Map and make sure that count of characters between the two strings is the same.

```js
function areAnagrams(s1: string, s2: string) {
  const charCount = new Map<string, number>();
  for (const char of s1.split('')) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of s2.split('')) {
    if (!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
  }
  return Array.from(charCount.values())
    .every(val => val === 0);
}
```
* We start by creating a map to count the character
* For each character in string 1
  * we go ahead and set the count, getting any previous value or initializing it to 0 and then incrementing it.
* For each character in string 2
  * if there is no key for it from string 1. Then we know we don't have an anagram.
  * Otherwise simply decrement the count
* Finally we go through all the values in the final map and simply make sure that every value is 0.

Since we are simply looping through the character and doing constant work in each iteration the complexity of this version of linear aka O(n).
