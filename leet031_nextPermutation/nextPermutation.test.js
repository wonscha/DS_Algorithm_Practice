// --- Examples
// nums = [1,2,3] => [1,3,2]
// nums = [3,2,1] => [1,2,3]
// nums = [1,1,5] => [1,5,1]

const nextPermutation = require('./nextPermutation');

testData1 = {
  nums: [1, 2, 3],
  output: [1, 3, 2]
}

testData2 = {
  nums: [3, 2, 1],
  output: [1, 2, 3]
}

testData3 = {
  nums: [1, 1, 5],
  output: [1, 5, 1]
}

test('case1', () => {
  nextPermutation(testData1.nums)
  expect(testData1.nums).toEqual(testData1.output)
})

test('case2', () => {
  nextPermutation(testData2.nums)
  expect(testData2.nums).toEqual(testData2.output)
})

test('case3', () => {
  nextPermutation(testData3.nums)
  expect(testData3.nums).toEqual(testData3.output)
})