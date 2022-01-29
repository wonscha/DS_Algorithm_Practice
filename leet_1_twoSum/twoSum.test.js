// --- Examples
// nums = [2, 7, 11, 15], target = 9; output = [0, 1]
// nums = [3, 2, 4], target = 6; output = [1, 2]
// nums = [3, 3], target = 6; output = [0, 1]

const twoSum = require('./twoSum')

test('[0, 1] are indexes of [2, 7, 11, 15] to get target 9', () => {
  expect(twoSum([2, 7, 11, 15], 9).sort()).toEqual([0, 1])
})

test('[1, 2] are indexes of [3, 2, 4] to get target 6', () => {
  expect(twoSum([3, 2, 4], 6).sort()).toEqual([1, 2])
})

test('[0, 1] are indexes of [3, 3] to get target 6', () => {
  expect(twoSum([2, 7, 11, 15], 9).sort()).toEqual([0, 1])
})