// --- Examples
// height = [1,8,6,2,5,4,8,3,7] => 49
// height = [1,1] => 1

const maxArea = require('./maxArea')

const case1 = {
  input: [1,8,6,2,5,4,8,3,7],
  output: 49
}

const case2 = {
  input: [1,1],
  output: 1
}

test('case1', () => {
  expect(maxArea(case1.input)).toBe(case1.output);
})

test('case2', () => {
  expect(maxArea(case2.input)).toBe(case2.output);
})