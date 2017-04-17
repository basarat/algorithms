/**
 * A word is an anagram of another if you can rearrange its characters to produce the second word.
 * Given two strings determines if they are anagrams of each other.
 * - 'earth' and 'heart' are anagrams
 * - 'silent' and 'listen' are anagrams
 * - 'foo' and 'bar' are not anagrams
 */
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
