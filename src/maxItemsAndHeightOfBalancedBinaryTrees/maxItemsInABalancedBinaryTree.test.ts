import { maxHeight, maxItems } from './maxItemsInABalancedBinaryTree';

test('balancedBinaryTree', () => {
  const height = 100;
  expect(maxHeight(maxItems(height))).toBe(height);
});
