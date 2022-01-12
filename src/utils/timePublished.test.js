import { timePublished } from './timePublished';

test('result should be a string', () => {
  let result = timePublished('2014-09-27T01:39:18Z');
  expect(typeof result).toBe('string');
});
