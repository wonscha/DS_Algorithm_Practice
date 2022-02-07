// --- Examples
// s = "42" => 42
// s = "   -42" => -42
// s = "4193 with words" => 4193

const myAtoi = require('./myAtoi');

const case1 = {
  input: '42',
  output: 42
}

const case2 = {
  input: '   -42',
  output: -42
}

const case3 = {
  input: '4193 with words',
  output: 4193
}

test('case1', () => {
  expect(myAtoi(case1.input)).toBe(case1.output);
})

test('case2', () => {
  expect(myAtoi(case2.input)).toBe(case2.output);
})

test('case3', () => {
  expect(myAtoi(case3.input)).toBe(case3.output);
})