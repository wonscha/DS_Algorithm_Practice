// --- Examples
// x = 121 => true
// x = -121 => false
// x = 10 => false

const isPalindrome = require('./isPalindrome');

test('example1', () => {
  expect(isPalindrome(121)).toBeTruthy();
})

test('example2', () => {
  expect(isPalindrome(-121)).toBe(false);
})

test('example3', () => {
  expect(isPalindrome(10)).toBe(false);
})

