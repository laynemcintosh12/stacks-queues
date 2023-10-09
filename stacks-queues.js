const LinkedList = require('./linkedlist');


class Queue {
    constructor() {
      this.list = new LinkedList();
    }
  
    isEmpty() {
      return this.list.length === 0;
    }
  
    enqueue(data) {
      this.list.push(data);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.list.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.list.head.val;
    }
}

  

class Stack {
    constructor() {
      this.list = new LinkedList();
    }
  
    isEmpty() {
      return this.list.length === 0;
    }
  
    push(data) {
      this.list.push(data);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.list.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.list.tail.val;
    }
}
