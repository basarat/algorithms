import { MinimumArray, MaximumArray } from './rankMaintenance';

test('Minimum', () => {
  const collection = new MinimumArray();
  collection.add(5);
  collection.add(4);
  collection.add(1);
  collection.add(2);

  expect(collection.extract()).toBe(1);
  expect(collection.extract()).toBe(2);
  expect(collection.extract()).toBe(4);
  expect(collection.extract()).toBe(5);
  expect(collection.extract()).toBe(undefined);
});

test('Miximum', () => {
  const collection = new MaximumArray();
  collection.add(5);
  collection.add(4);
  collection.add(1);
  collection.add(2);

  expect(collection.extract()).toBe(5);
  expect(collection.extract()).toBe(4);
  expect(collection.extract()).toBe(2);
  expect(collection.extract()).toBe(1);
  expect(collection.extract()).toBe(undefined);
});
