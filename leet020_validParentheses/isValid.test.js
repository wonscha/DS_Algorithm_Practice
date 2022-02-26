// --- Examples
// s = "()" => true
// s = "()[]{}" => true
// s = "(]" => false

const isValid = require('./isValid')

const case1 = {
  input: '()',
  output: true
}

const case2 = {
  input: '()[]{}',
  output: true
}

const case3 = {
  input: '(]',
  output: false
}

test('case1', () => {
  expect(isValid(case1.input)).toBe(case1.output);
});

test('case2', () => {
  expect(isValid(case2.input)).toBe(case2.output);
});

test('case3', () => {
  expect(isValid(case3.input)).toBe(case3.output);
});

