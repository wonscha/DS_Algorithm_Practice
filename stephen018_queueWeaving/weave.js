// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.

// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./Queue');

const weave = (q1, q2) => {
  // create a new instance of Queue to return
  const result = new Queue();

  // iterate until no elements left in both queue
  while (q1.peek() || q2.peek()) {

    // add element removed from q1 and q2 to result queue
    if (q1.peek()) result.add(q1.remove());
    if (q2.peek()) result.add(q2.remove());
  }

  // return result queue
  return result
}

module.exports = weave;