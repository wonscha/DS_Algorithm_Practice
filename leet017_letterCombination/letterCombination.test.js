// --- Examples
// digits = "23" => ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// digits = "" => []
// digits = "2" => ["a","b","c"]

const letterCombination = require('./letterCombination');

const case1 = {
  input: '23',
  output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
}

const case2 = {
  input: '',
  output: []
}

const case3 = {
  input: '2',
  output: ['a', 'b', 'c']
}

test('case1', () => {
  expect(letterCombination(case1.input)).toEqual(case1.output)
})

test('case2', () => {
  expect(letterCombination(case2.input)).toEqual(case2.output)
})

test('case3', () => {
  expect(letterCombination(case3.input)).toEqual(case3.output)
})