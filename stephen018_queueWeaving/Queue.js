class Queue {
  constructor() {
    this.queue = [];
  }

  add(element) {
    this.queue.unshift(element);
  }

  remove() {
    return this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length-1];
  }
}

module.exports = Queue;