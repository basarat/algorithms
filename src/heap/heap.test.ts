import { Heap } from './heap';

test('basic', () => {
  const heap = new Heap<number>((a, b) => a - b);
  heap.add(1);
  heap.add(3);
  heap.add(2);
  expect(heap.size()).toBe(3);
});
