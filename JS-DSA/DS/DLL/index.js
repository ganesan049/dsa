class NodeClass {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        let newNode = new NodeClass(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        let newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = this.tail.next;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let temp = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length -= 1;
        return temp;
    }

    unshift(value) {
        let newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length -= 1;
        return temp;
    }

    get(index) {
        if (!this.head || index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        } else {
            return false;
        }
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index == 0 || this.length == 0) return this.unshift(value);
        if (index == this.length) return this.push(value);
        let after = this.get(index);
        let before = after.prev;
        let newNode = new NodeClass(value);

        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;

        this.length += 1;
        return newNode;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index == 0 || this.length == 0) return this.shift();
        if (index == this.length - 1) return this.pop();
        let remove = this.get(index);
        let before = remove.prev;
        let after = remove.next;
        before.next = after;
        after.prev = before;
        remove.next = null;
        remove.prev = null;
        this.length -= 1;
        return remove;
    }

    reverse() {
        if (!this.head) return;
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let pre = null;
        let next = null;
        while (temp != null) {
            next = temp.next;

            temp.next = pre;
            temp.prev = next;

            pre = temp;
            temp = next;
        }
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}



let myDLL = new DoublyLinkedList(1);
myDLL.push(3);

console.log("DLL before insert():");
myDLL.printList();

myDLL.insert(1, 2);

console.log("\nDLL after insert(2) in middle:");
myDLL.printList();

myDLL.insert(0, 0);

console.log("\nDLL after insert(0) at beginning:");
myDLL.printList();

myDLL.insert(4, 4);

console.log("\nDLL after insert(4) at end:");
myDLL.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    DLL before insert():
    1
    3

    DLL after insert(2) in middle:
    1
    2
    3

    DLL after insert(0) at beginning:
    0
    1
    2
    3

    DLL after insert(4) at end:
    0
    1
    2
    3
    4

*/