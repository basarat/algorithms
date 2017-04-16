import { areAnagrams } from './anagram';

test('anagrams', () => {
  expect(areAnagrams('life', 'file')).toBeTruthy();
  expect(areAnagrams('life', 'lifl')).toBeFalsy();
  expect(areAnagrams('life', 'lifel')).toBeFalsy();
});
