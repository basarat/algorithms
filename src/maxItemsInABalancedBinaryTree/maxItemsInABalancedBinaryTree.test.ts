import { maxHeightOfABalancedBinaryTree, maxItemsInABalancedBinaryTree } from './maxItemsInABalancedBinaryTree';

test('mergeSort', () => {
  const height = 100;
  expect(maxHeightOfABalancedBinaryTree(maxItemsInABalancedBinaryTree(height))).toBe(height);
});
