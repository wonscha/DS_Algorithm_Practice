// --- Examples
// strs = ["flower","flow","flight"] => "fl"
// strs = ["dog","racecar","car"] => ""

const longestCommonPrefix = require('./longestCommonPrefix');

const case1 = {
  input: ["flower","flow","flight"],
  output: "fl"
}

const case2 = {
  input: ["dog", "racecar", "car"],
  output: ""
}

test('case1', () => {
  expect(longestCommonPrefix(case1.input)).toBe(case1.output);
})

test('case2', () => {
  expect(longestCommonPrefix(case2.input)).toBe(case2.output);
})

