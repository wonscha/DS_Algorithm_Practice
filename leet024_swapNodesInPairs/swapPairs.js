// --- Origin
// LeetCode #24 (Medium)

// --- Directions
// Given a linked list, swap every two adjacent nodes and return its head. 
// You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// --- Examples
// head = [1,2,3,4] => [2,1,4,3]
// head = [] => []
// head = [1] => [1]

// --- Constraints
// The number of nodes in the list is in the range [0, 100]
// 0 <= Node.val <= 100

const swapPairs = (head) => {
  if (!head || !head.next) return head;
  let n1 = head, n2 = head.next, n3 = head.next.next;
  n2.next = n1;
  n1.next = swapPairs(n3)
  return n2;
}

module.exports = swapPairs;