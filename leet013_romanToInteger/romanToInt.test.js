// --- Examples
// s = "III" => 3
// s = "LVIII" => 58
// s = "MCMXCIV" => 1994


const romanToInt = require('./romanToInt')

const case1 = "III"
const case2 = "LVIII"
const case3 = "MCMXCIV"

test('example1', () => {
  expect(romanToInt(case1)).toBe(3)
})

test('example2', () => {
  expect(romanToInt(case2)).toBe(58)
})

test('example3', () => {
  expect(romanToInt(case3)).toBe(1994)
})