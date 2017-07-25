import { DoublyLinkedList } from './doublyLinkedList';

test('basic', () => {
  const list = new DoublyLinkedList<number>();
  list.add(1);
  list.add(10);
  list.add(5);
  expect(Array.from(list.values())).toMatchObject([1, 10, 5]);
  expect(list.dequeue()).toBe(1);
  expect(Array.from(list.values())).toMatchObject([10, 5]);
  expect(list.dequeue()).toBe(10);
  expect(list.dequeue()).toBe(5);
  expect(list.dequeue()).toBe(undefined);
  expect(Array.from(list.values())).toMatchObject([]);
  list.add(5);
  list.add(10);
  list.add(1);
  expect(Array.from(list.values())).toMatchObject([5, 10, 1]);
  expect(list.pop()).toBe(1);
  expect(list.dequeue()).toBe(5);
  expect(list.pop()).toBe(10);
  expect(list.pop()).toBe(undefined);
  expect(list.dequeue()).toBe(undefined);
  expect(Array.from(list.values())).toMatchObject([]);
});
