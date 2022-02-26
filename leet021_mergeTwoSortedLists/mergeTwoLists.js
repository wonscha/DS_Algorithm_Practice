// --- Origin
// LeetCode #21 (Easy)

// --- Directions
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// --- Examples
// list1 = [1,2,4], list2 = [1,3,4] => [1,1,2,3,4,4]
// list1 = [], list2 = [] => []
// list1 = [], list2 = [0] => [0]

// --- Constraints
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

const { Node } = require('./LinkedList');

const mergeTwoLists = (list1, list2) => {
    const head = new Node(); // create a new node instance
    let curr = head; // set current node as head
    
    // while both pointers have nodes,
    while (list1 && list2) {

        // compare value of the nodes, and set a node of smaller value to next of merged list.
        if (list1.val <= list2.val) {
            curr.next = list1; 
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        
        curr = curr.next;
    }
    
    // handle tails of lists. (One of lists could have tail)
    if (list1) curr.next = list1;
    if (list2) curr.next = list2;
    
    // return next of head since the first node was created as starting point.
    return head.next;
};

module.exports = mergeTwoLists;