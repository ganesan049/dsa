class NodeClass {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new NodeClass(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let currNode = this.head;
        if (currNode == null) {
            console.log("nothing to print it's empty")
            return;
        }
        while (currNode != null) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }

    push(value) {
        const newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        let pre = this.head;
        let temp = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next
        }
        this.tail = pre;
        this.tail.next = null;
        this.length -= 1;

        // handling LL have one node
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length -= 1;
        if (this.length == 1) {
            this.tail = null;
        }
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index == 0) return this.unshift(value);
        if (index == this.length) return this.push(value);

        let newNode = new NodeClass(value);
        let temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length += 1;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index == this.length - 1) return this.pop();
        if (index == 0) return this.shift();
        let pre = this.get(index - 1);
        let temp = pre.next;
        pre.next = temp.next;
        temp.next = null;
        this.length -= 1;
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let prev = null;
        let next = temp.next;

        for (let index = 0; index < this.length; index++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }

    getHead() {
        if (this.head) {
            return this.head.value;
        }
        return null;
    }
    getTail() {
        if (this.tail) {
            return this.tail.value;
        }
        return null;
    }
    getLength() {
        return this.length;
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

const LL = new LinkedList(4);
LL.printList();
console.log(LL.getHead())
console.log(LL.getTail())
console.log(LL.getLength())

console.log(LL.getHead())
console.log(LL.getTail())
console.log(LL.getLength())
// LL.makeEmpty();

console.log(LL.push(5))
console.log(LL.getHead())
console.log(LL.getTail())
console.log(LL.getLength())

// console.log('removed value ' + LL.pop()?.value)
// console.log(LL.getHead())
// console.log(LL.getTail())
// console.log(LL.getLength())

console.log(LL.unshift(3))
// console.log(LL.getHead())
// console.log(LL.getTail())
// console.log(LL.getLength())
LL.printList();

console.log(LL.shift())
LL.printList();
// LL.makeEmpty()
// LL.printList();
console.log(LL.get(1)?.value)

console.log(LL.set(2, 44))
LL.printList();

console.log(LL.insert(2, 44))
LL.printList();

console.log(LL.remove(3))
LL.printList();

LL.reverse();
LL.printList();