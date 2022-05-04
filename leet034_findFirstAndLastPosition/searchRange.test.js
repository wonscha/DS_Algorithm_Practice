// --- Examples
// nums = [5,7,7,8,8,10], target = 8 => [3, 4]
// nums = [5,7,7,8,8,10], target = 6 => [-1, -1]
// nums = [], target = 0 => [-1, -1]

const searchRange = require('./searchRange');

case1 = {
  nums: [5,7,7,8,8,10],
  target: 8,
  output: [3, 4]
}

case2 = {
  nums: [5,7,7,8,8,10],
  target: 6,
  output: [-1, -1]
}

case3 = {
  nums: [],
  target: 0,
  output: [-1, -1]
}

test('case1', () => {
  expect(searchRange(case1.nums, case1.target)).toEqual(case1.output);
});

test('case2', () => {
  expect(searchRange(case2.nums, case2.target)).toEqual(case2.output);
});

test('case3', () => {
  expect(searchRange(case3.nums, case3.target)).toEqual(case3.output);
});