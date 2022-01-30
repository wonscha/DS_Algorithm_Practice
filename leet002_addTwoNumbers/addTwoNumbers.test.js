// --- Examples
// l1 = [2,4,3], l2 = [5,6,4] => [7, 0, 8]
// l1 = [0], l2 = [0] => [0]
// l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] => [8,9,9,9,0,0,0,1]

const { ListNode, addTwoNumbers } = require('./addTwoNumbers.js')

test('example1', () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
  
  const n1 = addTwoNumbers(l1, l2);
  const n2 = n1.next;
  const n3 = n2.next;

  expect(n1.val).toEqual(7);
  expect(n2.val).toEqual(0);
  expect(n3.val).toEqual(8);
});

test('example2', () => {
  const l1 = new ListNode(0);
  const l2 = new ListNode(0);
  
  const n1 = addTwoNumbers(l1, l2);

  expect(n1.val).toEqual(0);
  expect(n1.next).toEqual(null);
});

test('example3', () => {
  const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))));
  const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))));
  
  const refs = []
  let n = addTwoNumbers(l1, l2);
  while (n) {
    refs.push(n);
    n = n.next;
  }

  expect(refs.length).toBe(8);
  expect(refs[0].val).toEqual(8);
  expect(refs[1].val).toEqual(9);
  expect(refs[2].val).toEqual(9);
  expect(refs[3].val).toEqual(9);
  expect(refs[4].val).toEqual(0);
  expect(refs[5].val).toEqual(0);
  expect(refs[6].val).toEqual(0);
  expect(refs[7].val).toEqual(1);
});