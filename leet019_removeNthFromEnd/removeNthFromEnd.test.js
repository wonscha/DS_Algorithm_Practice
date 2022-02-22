// --- Examples
// head = [1,2,3,4,5], n = 2 => [1,2,3,5]
// head = [1], n = 1 => []
// head = [1,2], n = 1 => [1]

const LinkedList = require('./LinkedList');
const removeNthFromEnd = require('./removeNthFromEnd');

// create case1 list
const case1List = new LinkedList();
case1List.insertLast(1);
case1List.insertLast(2);
case1List.insertLast(3);
case1List.insertLast(4);
case1List.insertLast(5);

// case1
const case1 = {
  head: case1List.getHead(),
  n: 2,
  outputList: [1, 2, 3, 5] 
};

// create case2 list
const case2List = new LinkedList();
case2List.insertLast(1);

// case2
const case2 = {
  head: case2List.getHead(),
  n: 1,
  outputList: []
};

// create case3 list
const case3List = new LinkedList();
case3List.insertLast(1);
case3List.insertLast(2);

// case3
const case3 = {
  head: case3List.getHead(),
  n: 1,
  outputList: [1]
}

// function for test purpose; get list of list values
const getList = (head) => {
  const results = [];
  while (head) {
    results.push(head.val);
    head = head.next;
  }
  return results;
}

// tests for all prepared cases
test('case1', () => {
  expect(getList(removeNthFromEnd(case1.head, case1.n))).toEqual(case1.outputList)
})

test('case2', () => {
  expect(getList(removeNthFromEnd(case2.head, case2.n))).toEqual(case2.outputList)
})

test('case3', () => {
  expect(getList(removeNthFromEnd(case3.head, case3.n))).toEqual(case3.outputList)
})