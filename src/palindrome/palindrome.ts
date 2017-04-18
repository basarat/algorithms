/**
 * @module Palindrome solvers
 * A palindrome is a string that reads the same forward and backward, for example,
 * - radar, toot, madam.
 */

/**
 * Returns true if the string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

/** 
 * Returns true if any permutation of the string is a palindrome
 */
export function isAnyPermutationPalindrome(str: string): boolean {
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) unmatched.delete(char);
    else unmatched.add(char);
  });
  return unmatched.size <= 1;
}
