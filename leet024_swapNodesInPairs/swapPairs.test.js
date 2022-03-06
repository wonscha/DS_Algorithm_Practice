// --- Examples
// head = [1,2,3,4] => [2,1,4,3]
// head = [] => []
// head = [1] => [1]

// import modules
const LinkedList = require('./LinkedList')
const swapPairs = require('./swapPairs')

// test cases creation
const case1List = new LinkedList();
[1, 2, 3, 4].forEach(element => {
  case1List.insertLast(element)
});

case1 = {
  input: case1List.getHead(),
  outputList: [2, 1, 4, 3]
}

const case2List = new LinkedList();

case2 = {
  input: case2List.getHead(),
  outputList: []
}

const case3List = new LinkedList();
case3List.insertLast(1)

case3 = {
  input: case3List.getHead(),
  outputList: [1]
}

// tests
test('case1', () => {
  const list = [];
  let node = swapPairs(case1.input);
  while (node) {
    list.push(node.val)
    node = node.next
  }
  expect(list).toEqual(case1.outputList);
})

test('case2', () => {
  const list = [];
  let node = swapPairs(case2.input);
  while (node) {
    list.push(node.val)
    node = node.next
  }
  expect(list).toEqual(case2.outputList);
})

test('case3', () => {
  const list = [];
  let node = swapPairs(case3.input);
  while (node) {
    list.push(node.val)
    node = node.next
  }
  expect(list).toEqual(case3.outputList);
})