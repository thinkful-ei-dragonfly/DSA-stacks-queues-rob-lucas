'use strict';

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const newNode = new _Node(data);
    // if this is empty
    if (!this.first) {
      this.first = newNode;
    }

    // if there's a current value for last
    // make new item last
    if (this.last) {
      newNode.previous = this.last;
      this.last.next = newNode;
    }

    // this new item will be made into the 'last'
    this.last = newNode;
  }

  dequeue() {
    // if it's empty, there's nothing to dequeue
    if (!this.first) {
      return;
    }
    // reassign first to it's 'next' item
    const removeNode = this.first;
    const nextNode = this.first.next;
    nextNode.previous = null;
    this.first = nextNode;

    if (removeNode === this.last) {
      this.last = null;
    }
    return removeNode.value;
  }
}

function testDoubleQueue() {
  const starTrekDouble = new DoubleQueue();

  starTrekDouble.enqueue('Kirk');
  starTrekDouble.enqueue('Spock');
  starTrekDouble.enqueue('Uhura');
  starTrekDouble.enqueue('Sulu');
  starTrekDouble.enqueue('Checkov');
  console.log(starTrekDouble.dequeue());
  // Kirk is the first one in the Queue
}

testDoubleQueue();
