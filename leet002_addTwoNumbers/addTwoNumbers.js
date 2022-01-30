// --- Origin
// LeetCode #2 (Medium)

// --- Directions
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// --- Examples
// l1 = [2,4,3], l2 = [5,6,4] => [7, 0, 8]
// l1 = [0], l2 = [0] => [0]
// l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] => [8,9,9,9,0,0,0,1]

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers1 = (l1, l2) => {
  // create instances of array
  const arr1 = [];
  const arr2 = [];

  // create current node references and assign l1 and l2
  let curr1 = l1;
  let curr2 = l2;

  // push values into arrays iterating singly linked list
  while (curr1) {
    arr1.unshift(curr1.val);
    curr1 = curr1.next;
  }

  while (curr2) {
    arr2.unshift(curr2.val);
    curr2 = curr2.next;
  }

  // convert arrays into integers with join method and sum up
  const subStr = (BigInt(arr1.join('')) + BigInt(arr2.join(''))).toString();

  // create a singly linked list with digits
  let node = null;
  for (let num of subStr) {
    node = new ListNode(parseInt(num), node);
  }

  return node;
}

const addTwoNumbers2 = (l1, l2) => {
  // create references and variables used in loop
  const head = new ListNode('head', null);
  let prevNode = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    // get values from nodes. if node is null, 0 is assigned
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // get sum of values and carry
    let sum = val1 + val2 + carry;

    // if sum is two digit number, take carry and subtract 10 from sum
    if (sum > 9) {
      carry = 1;
      sum -= 10
    } else {
      carry = 0;
    }

    // creat a new node with sum and link it to previous node
    const newNode = new ListNode(sum, null)
    prevNode.next = newNode;
    prevNode = newNode;

    // move refs to next nodes;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  // return the node next to head
  return head.next;
}


module.exports = {
  ListNode, 
  addTwoNumbers: addTwoNumbers2
}