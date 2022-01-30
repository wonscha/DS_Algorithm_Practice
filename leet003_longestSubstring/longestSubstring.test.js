// --- Examples
// s = "abcabcbb" => 3
// s = "bbbbb" => 1
// s = "pwwkew" => 3

const longestSubstring = require('./longestSubstring');

test('example1', () => {
  expect(longestSubstring("abcabcbb")).toBe(3);
})

test('example2', () => {
  expect(longestSubstring("bbbbb")).toBe(1);
})

test('example3', () => {
  expect(longestSubstring("pwwkew")).toBe(3);
})