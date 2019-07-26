'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // add a node to back of Stack
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  // remove a node from back of stack and return removed node
  pop() {
    // store old top
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

/*
 * helper functions outside Stack class
 */

// #2 allows you to look at the top of the stack without removing it
function peek(stack) {
  return stack.top;
}

// #2 allows you to check if the stack is empty or not
function isEmpty(stack) {
  return !stack.top;
}

// #2 display the stack - consider: what is the 1st item in the stack?
function display(stack) {
  while (stack.top !== null) {
    console.log(stack.top.data);
    stack.top = stack.top.next;
  }
}

// #3 Check for palindromes using a stack
// Write an algorithm that uses a stack to determine whether a given
// input is palindrome or not. Use the following template as a starting point.
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  const regularString = new Stack();
  for (let i = 0; i < s.length; i++) {
    regularString.push(s[i]);
  }

  // racecar front to back, racecar back to front
  const reverseString = new Stack();
  for (let i = s.length - 1; i >= 0; i--) {
    reverseString.push(s[i]);
  }

  while (regularString.top !== null) {
    if (regularString.top.data !== reverseString.top.data) {
      return false;
    }
    regularString.top = regularString.top.next;
    reverseString.top = reverseString.top.next;
  }

  return true;
}

function main() {
  // testing #1
  const startrekStack = new Stack();
  startrekStack.push('Kirk');
  startrekStack.push('Spock');
  startrekStack.push('McCoy');
  startrekStack.push('Scotty');
  // peek(startrekStack);
  // display(startrekStack);
  const emptyStack = new Stack();
  // startrekStack.pop();
  // startrekStack.push('Scotty');
  // Scotty -> McCoy -> Spock -> Kirk
  // testing #2

  // testing #3
  // True, true, true, false
  // console.log(is_palindrome('dad'));
  // console.log(is_palindrome('A man, a plan, a canal: Panama'));
  // console.log(is_palindrome('1001'));
  // console.log(is_palindrome('Tauhida'));
}

main();

module.exports = Stack;
