// --- Origin
// LeetCode #19 (Medium)

// --- Directions
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// --- Examples
// head = [1,2,3,4,5], n = 2 => [1,2,3,5]
// head = [1], n = 1 => []
// head = [1,2], n = 1 => [1]

// --- Constraints
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

const removeNthFromEnd = (head, n) => {
    let fast = head, slow = head; // two pointers

    // move the fast pointer by n steps
    for (let i = 0; i < n ; i++) {
        fast = fast.next;
    }
    
    // handling of corner case: number of nodes === n
    // remove the first node and return the second node as head
    if (!fast) {
        head = head.next;
        return head;
    }
    
    // move two pointers until the first hit the last
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // remove the node at nth position from the end
    slow.next = slow.next.next;

    // return head of list
    return head;
}

module.exports = removeNthFromEnd;