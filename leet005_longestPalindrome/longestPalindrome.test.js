// --- Examples
// s = "babad" => "bab"
// s = "cbbd" => "bb"

const longestPalindrome = require('./longestPalindrome');

const case1 = "babad"
const case2 = "cbbd"


test('example1', () => {
  expect(["bab", "aba"]).toContain(longestPalindrome(case1))
})

test('example2', () => {
  expect(["bb"]).toContain(longestPalindrome(case2))
})