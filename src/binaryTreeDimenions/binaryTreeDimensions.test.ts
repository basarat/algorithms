import { maxHeight, maxItems } from './binaryTreeDimenions';

test('balancedBinaryTree', () => {
  const height = 100;
  expect(maxHeight(maxItems(height))).toBe(height);
});
