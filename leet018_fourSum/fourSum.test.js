// --- Examples
// nums = [1,0,-1,0,-2,2], target = 0 => [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// nums = [2,2,2,2,2], target = 8 => [[2,2,2,2]]\

const fourSum = require('./fourSum');

const case1 = {
  inputNums: [1,0,-1,0,-2,2],
  inputTarget: 0,
  output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
}

const case2 = {
  inputNums: [2,2,2,2,2],
  inputTarget: 8,
  output: [[2,2,2,2]]
}

test('case1', () => {
  expect(fourSum(case1.inputNums, case1.inputTarget)).toEqual(case1.output)
})

test('case2', () => {
  expect(fourSum(case2.inputNums, case2.inputTarget)).toEqual(case2.output)
})