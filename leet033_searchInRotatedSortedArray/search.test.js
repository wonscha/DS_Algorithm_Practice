// --- Examples
// nums = [4,5,6,7,0,1,2], target = 0 => 4
// nums = [4,5,6,7,0,1,2], target = 3 => -1
// nums = [1], target = 0 => -1

const search = require('./search');

case1 = {
  nums: [4,5,6,7,0,1,2],
  target: 0,
  output: 4
};

case2 = {
  nums: [4,5,6,7,0,1,2],
  target: 3,
  output: -1
};

case3 = {
  nums: [1],
  target: 0,
  output: -1
};

test('case1', () => {
  expect(search(case1.nums, case1.target)).toBe(case1.output);
});

test('case2', () => {
  expect(search(case2.nums, case2.target)).toBe(case2.output);
});

test('case3', () => {
  expect(search(case3.nums, case3.target)).toBe(case3.output);
});