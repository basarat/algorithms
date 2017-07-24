import { LinkedList } from './linkedList';

test('basic', () => {
  const list = new LinkedList<number>();
  list.enqueue(1);
  list.enqueue(10);
  list.enqueue(5);
  expect(Array.from(list.values())).toMatchObject([1, 10, 5]);
  expect(list.dequeue()).toBe(1);
  expect(Array.from(list.values())).toMatchObject([10, 5]);
});
