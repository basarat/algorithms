/**
 * Returns the max items that can exist in a perfectly balanced binary tree
 */
export function maxItems(height: number) {
  return 2 ** height - 1;
}

/**
 * Returns the max height of a balanced binary tree given n items
 */
export function maxHeight(items: number) {
  return Math.log2(items + 1);
}
