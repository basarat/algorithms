import * as assert from 'assert';
import { isPalindrome, isAnyPermutationPalindrome } from './palindrome';

test('isPalindrome', () => {
  assert(isPalindrome('radar'));
  assert(isPalindrome('madam'));
  assert(isPalindrome('toot'));
  assert(!isPalindrome('toots'));
});

test('isAnyPermutationPalindrome', () => {
  assert(isAnyPermutationPalindrome('civic'));
  assert(isAnyPermutationPalindrome('vicic'));
  assert(isAnyPermutationPalindrome('toot'));
  assert(isAnyPermutationPalindrome('toots'));
  assert(!isAnyPermutationPalindrome('civil'));
});
