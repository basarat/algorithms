import { Heap, CompareFn } from '../heap/heap';

/**
 * Sorts an array using heap sort
 */
export function heapSort<T>(array: T[], cmp: CompareFn<T>): T[] {
  const heap = new Heap(cmp);
  for (const item of array) {
    heap.add(item);
  }
  const result: T[] = [];
  for (let index = 0; index < array.length; index++) {
    result.push(heap.extractRoot());
  }
  return result;
}
