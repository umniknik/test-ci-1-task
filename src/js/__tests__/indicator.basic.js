import indicator from '../indicator';

test('', () => {

});

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 40 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])(('Testing indicator with %s object and %s value'), ((user, expected) => {
  const result = indicator(user);
  expect(result).toBe(expected);
}));
