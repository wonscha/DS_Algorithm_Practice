// --- Examples
// nums = [3,2,2,3], val = 3 => 2, nums = [2,2,_,_]
// nums = [0,1,2,2,3,0,4,2], val = 2 => 5, nums = [0,1,4,0,3,_,_,_]

const removeElement = require('./removeElement');

// test cases
case1 = {
  nums: [3, 2, 2, 3],
  val: 3,
  k: 2,
  expected: [2, 2]
}

case2 = {
  nums: [0, 1, 2, 2, 3, 0, 4, 2],
  val: 2,
  k: 5,
  expected: [0, 1, 3, 0, 4]
}

// tests
test('case1', () => {
  const k = removeElement(case1.nums, case1.val);
  expect(k).toBe(case1.k);

  for (let i = 0; i < k; i++) {
    expect(case1.nums[i]).toBe(case1.expected[i])
  }
})

test('case2', () => {
  const k = removeElement(case2.nums, case2.val);
  expect(k).toBe(case2.k);

  for (let i = 0; i < k; i++) {
    expect(case2.nums[i]).toBe(case2.expected[i])
  }
})