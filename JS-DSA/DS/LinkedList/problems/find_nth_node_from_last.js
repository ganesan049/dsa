class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Bruteforce -> O(2n)
/*
Get the length and sub with the k (5 - 2). Iterate till result for sub and the element to find will be there
*/
    findKthFromEndBF(index) {
        if (index < 0) return null;
        let temp = this.head;
        let count = 0;
        while (temp != null) {
            count += 1;
            temp = temp.next;
        }
        let result = count - index;
        temp = this.head;
        for (let index = 0; index < result; index++) {
            temp = temp.next;
        }
        return temp;
    }

    // optimized
/*
1 2 3 4 5

k 3
In first step fast will got to element 3 i.e 3

1 2 3 4 5
    f

edge case if k >= lenght of list, during next i'll become null return

if not

1 2 3 4 5
s   f

Iterate till f next is null
1 2 3 4 5
  s   f
1 2 3 4 5
    s   f

return with s.next
*/
    findKthFromEnd(k) {
        if (k <= 0) return null;
        let fast = this.head;
        for (let index = 0; index < k; index++) {
            if (fast == null) {
                return null;
            }
            fast = fast.next;
        }
        // moving fast n steps from start node
        let slow = this.head;
        if (fast == null) {
            return slow;
        }
        while (fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow.next;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
    console.log(kthNodeFromEnd.value);
} else {
    console.log("Not found");
}


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/
