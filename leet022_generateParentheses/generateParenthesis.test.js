// --- Examples
// n = 3 => ["((()))","(()())","(())()","()(())","()()()"]
// n = 1 => ["()"]

const generateParenthesis = require('./generateParenthesis')

const case1 = {
  n: 3,
  output: ["((()))","(()())","(())()","()(())","()()()"]
}

const case2 = {
  n: 1,
  output: ["()"]
}

test("case1", () => {
  expect(generateParenthesis(case1.n)).toEqual(case1.output);
})

test("case2", () => {
  expect(generateParenthesis(case2.n)).toEqual(case2.output);
})