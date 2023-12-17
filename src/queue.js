const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    let current = null;
    for (let i = this.head; i < this.tail; i += 1) {
      if (!current) {
        current = new ListNode(this.storage[i]);
      } else {
        let temporary = current;
        while (temporary.next) {
          temporary = temporary.next;
        }
        temporary.next = new ListNode(this.storage[i]);
      }
    }
    return current;
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail += 1;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head += 1;
    return removed;
  }
}

module.exports = {
  Queue
};
