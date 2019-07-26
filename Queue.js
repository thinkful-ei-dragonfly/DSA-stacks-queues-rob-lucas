'use strict';

class _Node {
  constructor(data, value) {
    this.data = data;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    
  }

  dequeue() {

  }

}


/*
 * Exterior helper functions
 */

function peek() {

}

function isEmpty() {

}

function display() {

}

function main() {
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  // starTrekQ.dequeue();
  // starTrekQ.dequeue();
  
}

main();
