/**
 * @module Palindrome solver
 * A palindrome is a string that reads the same forward and backward, for example,
 * - radar, toot, madam.
 * - Write a function that checks if a given string is a palindrome.
 */

/**
 * Returns true if the string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

/** 
 * Return true if any permutation of the string is a palindrome
 */
export function isAnyPermutationPalindrome(str: string): boolean {
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) unmatched.delete(char);
    else unmatched.add(char);
  });
  return unmatched.size <= 1;
}
