// --- Examples
// s = "PAYPALISHIRING", numRows = 3 => "PAHNAPLSIIGYIR"
// s = "PAYPALISHIRING", numRows = 4 => "PINALSIGYAHRPI"
// s = "A", numRows = 1 => "A"

const convert = require('./convert');

const case1 = {
  s: "PAYPALISHIRING",
  numRows: 3
}

const case2 = {
  s: "PAYPALISHIRING",
  numRows: 4
}

const case3 = {
  s: "A",
  numRows: 1
}

test('example1', () => {
  expect(convert(case1.s, case1.numRows)).toBe("PAHNAPLSIIGYIR")
})

test('example2', () => {
  expect(convert(case2.s, case2.numRows)).toBe("PINALSIGYAHRPI")
})

test('example3', () => {
  expect(convert(case3.s, case3.numRows)).toBe("A")
})