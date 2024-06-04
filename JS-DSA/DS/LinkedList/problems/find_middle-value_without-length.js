/*
Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.

Note: this LinkedList implementation does not have a length member variable.

Output:

Return the middle node of the linked list.

If the list has an even number of nodes, return the second middle node (the one closer to the end).
length -> return index
5 -> 3 (middle), 4 -> 2 (middle + 1), 2 -> 2, 1 -> 1

Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

You can only traverse the linked list once.
*/

/*
Hint tortoise and hare approach 
Always tortoise will slow one step and hare moves two step
T -> 1, H -> 2
T -> 2, H -> 4
T -> 3, H -> 6

when H / H.next is null return T
For even numbers H.next will be null
For odd numbers H will be null
*/
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

    // WRITE THE FINDMIDDLENODE METHOD HERE // 
    //                                      //
    //                                      //
    //                                      //
    //                                      //
    //////////////////////////////////////////

    findMiddleNode(){
        if(!this.head) return null;
        let slow = this.head; // tortoise
        let fast = this.head; // hare
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Middle node value: 3
    Original list 2:
    1
    2
    3
    4
    5
    6
    Middle node value of list 2: 4
*/
