import { Queue } = require('./Queue.js')
import { Stack } = require('./Stack.js')

function queueImplementation() {
  const stackOne = new Stack()
  const stackTwo = new Stack()

  stackOne.push('Kirk');
  stackOne.push('Spock');
  stackOne.push('McCoy');
  stackOne.push('Scotty');

  stackTwo.push('First');
  stackTwo.push('Second');
  stackTwo.push('Third');
  stackTwo.push('Fourth');

  let testQueue = new Queue()

  testQueue.enqueue(stackOne)
  testQueue.enqueue(stackTwo)

  console.log(testQueue.first);
}
queueImplementation()
