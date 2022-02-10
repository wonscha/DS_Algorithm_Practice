// --- Examples
// num = 3 => "III"
// num = 58 => "LVIII"
// num = 1994 => "MCMXCIV"

const intToRoman = require('./intToRoman');

const case1 = {
  input: 3,
  output: 'III'
}

const case2 = {
  input: 58,
  output: 'LVIII'
}

const case3 = {
  input: 1994,
  output: 'MCMXCIV'
}

test('case1', () => {
  expect(intToRoman(case1.input)).toBe(case1.output);
})

test('case2', () => {
  expect(intToRoman(case2.input)).toBe(case2.output);
})

test('case3', () => {
  expect(intToRoman(case3.input)).toBe(case3.output);
})