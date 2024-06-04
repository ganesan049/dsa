class Stack {
    constructor() {
        this.stackList = [];
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    
}



class MyQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    
    peek() {
        return this.stack1.peek();
    }

    isEmpty() {
        return this.stack1.isEmpty();
    }

    enqueue(value){
        while(!this.stack2.isEmpty()){
            this.stack2.pop();
        }
        while(!this.stack1.isEmpty()){
            this.stack2.push(this.stack1.pop());
        }
        this.stack2.push(value);
        while(!this.stack2.isEmpty()){
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue(){
        if(this.stack1.isEmpty()) return null;
        return this.stack1.pop();
    }

}



// const queue = new MyQueue();

// console.log("Is the queue empty? ", queue.isEmpty());

// queue.enqueue(1);
// console.log("Peek after enqueueing 1: ", queue.peek());

// queue.enqueue(2);
// console.log("Peek after enqueueing 2: ", queue.peek());

// queue.enqueue(3);
// console.log("Peek after enqueueing 3: ", queue.peek());

// console.log("Is the queue empty? ", queue.isEmpty());



/*
    EXPECTED OUTPUT:
    ----------------
    Is the queue empty?  true
    Peek after enqueueing 1:  1
    Peek after enqueueing 2:  1
    Peek after enqueueing 3:  1
    Is the queue empty?  false

*/




const queue = new MyQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Initial queue state:");
console.log("Peek: ", queue.peek());
console.log("Is the queue empty? ", queue.isEmpty());

console.log("Dequeueing the first element: ", queue.dequeue());
console.log("Peek after dequeueing: ", queue.peek());

console.log("Dequeueing the second element: ", queue.dequeue());
console.log("Peek after dequeueing: ", queue.peek());

console.log("Dequeueing the third element: ", queue.dequeue());
console.log("Is the queue empty? ", queue.isEmpty());

console.log("Dequeueing from empty queue: ", queue.dequeue());



/*
    EXPECTED OUTPUT:
    ----------------
    Initial queue state:
    Peek:  1
    Is the queue empty?  false
    Dequeueing the first element:  1
    Peek after dequeueing:  2
    Dequeueing the second element:  2
    Peek after dequeueing:  3
    Dequeueing the third element:  3
    Is the queue empty?  true
    Dequeueing from empty queue:  null

*/