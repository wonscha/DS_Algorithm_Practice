// Node
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Simple singly linked list with methods required for the case.
class LinkedList {
  constructor() {
    this.head = null;
  }

  // add a node of value to the last
  insertLast(val) {
    const lastNode = this.getLast();
    const newNode = new Node(val);

    if (!lastNode) {
      this.head = newNode;
    } else {
      lastNode.next = newNode;
    }
  }

  // get last node
  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node.next) node = node.next;

    return node;
  }

  // get head node
  getHead() {
    return this.head;
  }
}

module.exports = LinkedList;