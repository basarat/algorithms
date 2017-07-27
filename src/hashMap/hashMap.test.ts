import { HashMap } from './hashMap';

test('basic', () => {
  const map = new HashMap<string, { cost: number }>();
  map.set('foo', { cost: 123 });
  map.set('bar', { cost: 456 });
  expect(map.get('foo')).toMatchObject({ cost: 123 });
  expect(map.has('bar')).toBeTruthy();
  expect(map.has('baz')).toBeFalsy();
});
