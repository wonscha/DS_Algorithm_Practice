// --- Examples
// list1 = [1,2,4], list2 = [1,3,4] => [1,1,2,3,4,4]
// list1 = [], list2 = [] => []
// list1 = [], list2 = [0] => [0]

const mergeTwoLists = require('./mergeTwoLists');
const { LinkedList } = require('./LinkedList');

// case1 creation
const case1List1 = new LinkedList();
case1List1.insertLast(1);
case1List1.insertLast(2);
case1List1.insertLast(4);

const case1List2 = new LinkedList();
case1List2.insertLast(1);
case1List2.insertLast(3);
case1List2.insertLast(4);

const case1 = {
  list1Head: case1List1.getHead(),
  list2Head: case1List2.getHead(),
  outputList: [1, 1, 2, 3, 4, 4]
}

// case2 creation
const case2List1 = new LinkedList();
const case2List2 = new LinkedList();

const case2 = {
  list1Head: case2List1.getHead(),
  list2Head: case2List2.getHead(),
  outputList: []
}

// case3 creation
const case3List1 = new LinkedList();
const case3List2 = new LinkedList();
case3List2.insertLast(0);

const case3 = {
  list1Head: case3List1.getHead(),
  list2Head: case3List2.getHead(),
  outputList: [0]
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

// tests
test('case1', () => {
  expect(getList(mergeTwoLists(case1.list1Head, case1.list2Head))).toEqual(case1.outputList);
})

test('case2', () => {
  expect(getList(mergeTwoLists(case2.list1Head, case2.list2Head))).toEqual(case2.outputList);
})

test('case3', () => {
  expect(getList(mergeTwoLists(case3.list1Head, case3.list2Head))).toEqual(case3.outputList);
})
