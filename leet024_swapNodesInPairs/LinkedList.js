class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  getLast() {
    let pointer = this.head;
    while (pointer && pointer.next) {
      pointer = pointer.next;
    }
    return pointer;
  }

  insertLast(val) {
    const lastNode = this.getLast();
    const newNode = new Node(val);
    if (lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getHead() {
    return this.head;
  }
}

module.exports = LinkedList;