// Node Class
class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Linked List Class
class LinkedList {
  constructor() {
    this.head = null;
  }

  getLast() {
    let curr = this.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    return curr;
  }

  insertLast(val) {
    const newNode = new Node(val);
    const lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getHead() {
    return this.head;
  }
};

module.exports = {
  Node,
  LinkedList
}