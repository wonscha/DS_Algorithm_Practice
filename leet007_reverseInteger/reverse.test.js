// --- Examples
// x = 123 => 321
// x = -123 => -321
// x = 120 => 21

const reverse = require('./reverse');

const case1 = {
  x: 123, 
  y: 321  
};
const case2 = {
  x: -123, 
  y: -321
};
const case3 = {
  x: 120,
  y: 21
};

test('case1', () => {
  expect(reverse(case1.x)).toBe(case1.y)
})

test('case2', () => {
  expect(reverse(case2.x)).toBe(case2.y)
})

test('case3', () => {
  expect(reverse(case3.x)).toBe(case3.y)
})