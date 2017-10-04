import { MedianMaintenanceArray, MedianMaintenanceHeap } from './medianMaintenance';

test('MedianMaintenanceArray', () => {
  const maintain = new MedianMaintenanceArray();
  expect(maintain.add(4)).toBe(4);
  expect(maintain.add(6)).toBe(5);
  expect(maintain.add(3)).toBe(4);
});

test('MedianMaintenanceHeap', () => {
  const maintain = new MedianMaintenanceHeap();
  expect(maintain.add(4)).toBe(4);
  expect(maintain.add(6)).toBe(5);
  expect(maintain.add(3)).toBe(4);
});
