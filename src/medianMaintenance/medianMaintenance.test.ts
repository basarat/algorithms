import { MedianMaintenanceArray } from './medianMaintenance';

test('MedianMaintenance', () => {
  const maintain = new MedianMaintenanceArray();
  expect(maintain.add(4)).toBe(4);
  expect(maintain.add(6)).toBe(5);
  expect(maintain.add(3)).toBe(4);
});
