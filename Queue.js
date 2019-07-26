'use strict';

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data)
    // if this is empty
    if (!this.first) {
      this.first = node
    }

    // if there's a current value for last
    // make new item last
    if (this.last) {
      this.last.next = node
    }

    // this new item will be made into the 'last'
    this.last = node
  }

  dequeue() {
    // if it's empty, there's nothing to dequeue
    if (!this.first) {
      return
    }
    // reassign first to it's 'next' item
    const node = this.first
    this.first = this.first.next

    if (node === this.last) {
      this.last = null
    }
    return node.value

  }

}


/*
 * Exterior helper functions
 */

function peek(queue) {
  return queue.first
}
function last(queue) {
  return queue.last
}

function isEmpty(queue) {
  return !queue.first
}

function display(queue) {
  while (queue.first !== null) {
    console.log(queue.first.value);
    queue.first = queue.first.next
  }
}

function main() {

  /*
  Exercise 6
  */
  const starTrekQ = new Queue();

  /*
  Exercise 6
  */
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  /*
  Exercise 6
  */

  const QueueStack = new Queue()

  QueueStack.enqueue(stackOne.pop())
  QueueStack.enqueue(stackTwo.pop())

}

main();

module.exports = Queue
