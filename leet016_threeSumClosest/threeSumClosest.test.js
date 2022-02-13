// --- Examples
// nums = [-1,2,1,-4], target = 1 => 2
// nums = [0,0,0], target = 1 => 0

const threeSumClosest = require('./threeSumClosest');

const case1 = {
  input: [[-1, 2, 1, -4], 1],
  output: 2
}

const case2 = {
  input: [[0, 0, 0], 1],
  output: 0
}

test('case1', () => {
  expect(threeSumClosest(...case1.input)).toBe(case1.output)
})

test('case2', () => {
  expect(threeSumClosest(...case2.input)).toBe(case2.output)
})