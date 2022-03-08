// --- Examples
// nums = [1,1,2] => 2, nums = [1,2,_]
// nums = [0,0,1,1,1,2,2,3,3,4] => 5, nums = [0,1,2,3,4,_,_,_,_,_]

const removeDuplicates = require('./removeDuplicates');

// test cases
case1 = {
  input: [1, 1, 2],
  k: 2,
  expected: [1, 2, null]
}

case2 = {
  input: [0,0,1,1,1,2,2,3,3,4],
  k: 5,
  expected: [0,1,2,3,4,null,null,null,null,null]
}

// tests
test('case1', () => {
  expect(removeDuplicates(case1.input)).toBe(case1.k);
  for (let i = 0; i < case1.k; i++) {
    expect(case1.input[i]).toBe(case1.expected[i])
  }
})

test('case2', () => {
  expect(removeDuplicates(case2.input)).toBe(case2.k);
  for (let i = 0; i < case2.k; i++) {
    expect(case2.input[i]).toBe(case2.expected[i])
  }
})