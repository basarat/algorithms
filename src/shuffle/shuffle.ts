import { randomInt } from '../random/random';

/**
 * Returns a shuffled version of the input array
 */
export function shuffle<T>(array: T[]): T[] {
  array = array.slice();
  length = array.length - 1
  
  for (let i = 0; i < length; i++) {
    const randomChoiceIndex = randomInt(i, length);
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
  }

  return array;
}
