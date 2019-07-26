'use strict';

const Queue = require('./Queue.js');
const Stack = require('./Stack.js');


function queueImplementation() {
  const stackOne = new Stack();
  const stackTwo = new Stack();

  const mimicQueue = {
    stackOne,
    stackTwo,
    enqueue: function enqueue(value) {
      // add value to top of stack one
      stackOne.push(value);
    },
    dequeue: function dequeue() {
      if (stackOne.top === null) {
        console.log('queue is already empty');
        return;
      }

      let returnedNode = null;
      while (stackOne.top.next !== null) {
        stackTwo.push(stackOne.pop());
      }
      returnedNode = stackOne.top;
      stackOne.pop();
      this._addBackToOne(stackOne, stackTwo);
      return returnedNode;
    },
    _addBackToOne: function _addBackToOne(stackOne, stackTwo) {
      while (stackTwo.top !== null) {
        stackOne.push(stackTwo.pop());
      }
    },
    display: function display() {
      while (stackOne.top !== null) {
        console.log(stackOne.top.data);
        stackOne.top = stackOne.top.next;
      }
    }
  };

  mimicQueue.enqueue('firstIntoStackOne');
  mimicQueue.enqueue('secondIntoStackOne');
  mimicQueue.enqueue('thirdIntoStackOne');

  mimicQueue.dequeue();
  mimicQueue.dequeue();
  mimicQueue.display();

}
queueImplementation();
