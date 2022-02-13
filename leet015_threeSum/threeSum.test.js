


const threeSum = require('./threeSum');

const case1 = {
  input: [-1, 0, 1, 2, -1, 4],
  output: [[-1, -1, 2], [-1, 0, 1]]
}

const case2 = {
  input: [],
  output: []
}

const case3 = {
  input: [0],
  output: []
}

test('case1', () => {
  expect(threeSum(case1.input)).toEqual(case1.output)
})

test('case2', () => {
  expect(threeSum(case2.input)).toEqual(case2.output)
})

test('case3', () => {
  expect(threeSum(case3.input)).toEqual(case3.output)
})