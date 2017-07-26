import { randomInt } from '../random/random';

export function fisherYatesShuffle<T>(array: T[]): T[] {
  // Clone array
  array = array.slice();

  // For each index in array
  for (let i = 0; i < array.length; i++) {

    // choose a random not-yet-placed item to place there
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed
    const randomChoiceIndex = randomInt(i, array.length);

    // place our random choice in the spot by swapping
    [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
  }

  return array;
}
