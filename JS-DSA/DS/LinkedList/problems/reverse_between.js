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
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    // WRITE THE REVERSEBETWEEN METHOD HERE // 
    //                                      //
    //                                      //
    //                                      //
    //                                      //
    //////////////////////////////////////////
    reverseBetweenFirstApproach(m, n) {
        if (m < 0 || n >= this.length) return null;
        let pre = null;
        let post = null;
        let temp = this.head;
        let tail = null;
        let curr = null;
        let currTemp = null;
        for (let index = 0; index < this.length; index++) {
            if (index + 1 == m) {
                pre = temp;
            }

            if (index >= m && index <= n) {
                let newNode = new NodeClass(temp.value);
                newNode.next = curr;
                curr = newNode;
                if (index == m) {
                    tail = newNode;
                    curr = null;
                } else {
                    curr.next = currTemp;
                }
                currTemp = newNode;
            }

            if (index == n) {
                post = temp.next;
                break;
            }

            temp = temp.next;
        }

        if (pre) {
            pre.next = curr;
        } else {
            this.head = curr;
        }
        if (post) {
            tail.next = post;
        }
    }

/*
    set prevLeftNode to before of m index and leftNode to m index
    reverse the nodes between m to n and get back reversed list head and reversed tail next (n+1)
    if prevLeftNode exists set next to prevLeftNode reversed list 
    or set head as reversed list
    set reversed tail next as next to leftNode next
*/

    reverseBetween(m, n) {
        if (m < 0 || n >= this.length) return null;
        let prevLeftNode = null;
        let leftNode = this.head;
        for (let index = 0; index < m; index++) {
            prevLeftNode = leftNode;
            leftNode = leftNode.next;
        }

        let [reverseLeftNode, reverseRightNextNode] = this.reverse(leftNode, n - m + 1);
        if(prevLeftNode){
            prevLeftNode.next = reverseLeftNode;
        }else{
            this.head = reverseLeftNode;
        }
        leftNode.next = reverseRightNextNode;
    }

    reverse(node, count) {
        let pre = null;
        let next = null;
        let temp = node;

        for (let index = 0; index < count; index++) {
            next = temp.next;
            temp.next = pre;
            pre = temp;
            temp = next;
        }

        return [ pre, next ]
    }
}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 0;
const n = 3;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
