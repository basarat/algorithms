export function isPalindrome(str: string) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

export function isAnyPermutationPalindrome(str: string) {
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) unmatched.delete(char);
    else unmatched.add(char);
  });
  return unmatched.size <= 1;
}
