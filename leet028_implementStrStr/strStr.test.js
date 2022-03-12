// --- Examples
// haystack = "hello", needle = "ll" => 2
// haystack = "aaaaa", needle = "bba" => -1
// haystack = "", needle = "" => 0

// import
const strStr = require('./strStr');

// test data creation
const testData1 = {
  haystack: "hello",
  needle: "ll",
  output: 2
};

const testData2 = {
  haystack: "aaaaa",
  needle: "bba",
  output: -1
}

const testData3 = {
  haystack: "",
  needle: "",
  output: 0
}


// tests
test("test1", () => {
  expect(strStr(testData1.haystack, testData1.needle)).toBe(testData1.output)
})

test("test2", () => {
  expect(strStr(testData2.haystack, testData2.needle)).toBe(testData2.output)
})

test("test3", () => {
  expect(strStr(testData3.haystack, testData3.needle)).toBe(testData3.output)
})