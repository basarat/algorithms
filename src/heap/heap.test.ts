import { Heap } from './heap';

test('basic', () => {
  const heap = new Heap<number>((a, b) => a - b);
  heap.add(1);
  heap.add(3);
  heap.add(2);
  expect(heap.size()).toBe(3);

  expect(heap.extractRoot()).toBe(1);
  expect(heap.extractRoot()).toBe(2);
  expect(heap.extractRoot()).toBe(3);

  expect(heap.size()).toBe(0);

  heap.add(3);
  heap.add(1);
  heap.add(2);
  heap.add(4);
  heap.add(6);
  heap.add(5);
  heap.add(9);
  heap.add(0);
  expect(heap.size()).toBe(8);
  expect(heap.extractRoot()).toBe(0);
  expect(heap.extractRoot()).toBe(1);
  expect(heap.extractRoot()).toBe(2);
  expect(heap.extractRoot()).toBe(3);
  expect(heap.extractRoot()).toBe(4);
  expect(heap.extractRoot()).toBe(5);
  expect(heap.extractRoot()).toBe(6);
  expect(heap.extractRoot()).toBe(9);
  expect(heap.extractRoot()).toBe(undefined);
});
