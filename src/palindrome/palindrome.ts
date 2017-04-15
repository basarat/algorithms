function isPalindrome(str: string) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

import * as assert from 'assert';
assert(isPalindrome('radar'));
assert(isPalindrome('madam'));
assert(isPalindrome('toot'));
assert(!isPalindrome('toots'));

function isAnyPermutationPalindrome(str: string) {
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) unmatched.delete(char);
    else unmatched.add(char);
  });
  return unmatched.size <= 1;
}

assert(isAnyPermutationPalindrome('civic'));
assert(isAnyPermutationPalindrome('vicic'));
assert(isAnyPermutationPalindrome('toot'));
assert(isAnyPermutationPalindrome('toots'));
assert(!isAnyPermutationPalindrome('civil'));
