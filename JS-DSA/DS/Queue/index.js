class NodeClass {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        let newNode = new NodeClass(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value){
        let newNode = new NodeClass(value);
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length += 1;
        return this;
    }

    dequeue(){
        if(!this.first) return undefined;
        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length -= 1;
        if(this.length == 0){
            this.first = null;
            this.last = null;
        }
        return temp;
    }


    printStack() {
        console.log(JSON.stringify(this))
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

let queue = new Queue(1);
// queue.enqueue(2)
// queue.enqueue(3)
console.log(JSON.stringify(queue.enqueue(4)))
// console.log("removed value ", queue.pop())
console.log(queue.dequeue())
queue.printStack()
