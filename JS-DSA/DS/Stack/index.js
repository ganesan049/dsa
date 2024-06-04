class NodeClass {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        let newNode = new NodeClass(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {
        let newNode = new NodeClass(value);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.top) return null;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length-=1;
        return temp.value;
    }

    printStack() {
        let temp = this.top;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

let stack = new Stack(1);
// stack.push(2)
// stack.push(3)
// console.log(JSON.stringify(stack.push(4)))
console.log("removed value ", stack.pop())
stack.push(4)
stack.printStack()
