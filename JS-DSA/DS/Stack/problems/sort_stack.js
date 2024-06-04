/*
Implement a function called sortStack() that takes a stack of integers as input and sorts the stack in ascending order (with the smallest element on top) using an additional temporary stack.

Suppose you have a Stack object, stack, with the following values:
[5, 3, 1, 4, 2]

After calling the sortStack() function:

sortStack(stack);

The stack should now have the following values:
[5, 4, 3, 2, 1]
*/

class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
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

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    
}



function sortStack(stackList) {
    if(stackList.isEmpty()) return null;
    let additionalStack = new Stack();
    while (!stackList.isEmpty()) {
        let temp = stackList.pop();
        while(!additionalStack.isEmpty() && additionalStack.peek() > temp){
            stackList.push(additionalStack.pop());
        }
        additionalStack.push(temp)
    }
    while (!additionalStack.isEmpty()) {
        stackList.push(additionalStack.pop())
    }
}



function stackToString(stack) {
  return JSON.stringify(stack.getStackList());
}

// Test case 1
const stack1 = new Stack();
stack1.push(5);
stack1.push(3);
stack1.push(8);
stack1.push(1);
const expected1 = JSON.stringify([8, 5, 3, 1]);
sortStack(stack1);
const result1 = stackToString(stack1);
console.log(`Test case 1 | Expected: ${expected1} | Result: ${result1}`);

// Test case 2
const stack2 = new Stack();
stack2.push(9);
stack2.push(4);
stack2.push(7);
stack2.push(2);
const expected2 = JSON.stringify([9, 7, 4, 2]);
sortStack(stack2);
const result2 = stackToString(stack2);
console.log(`Test case 2 | Expected: ${expected2} | Result: ${result2}`);

// Test case 3
const stack3 = new Stack();
stack3.push(10);
stack3.push(6);
stack3.push(3);
stack3.push(1);
stack3.push(5);
const expected3 = JSON.stringify([10, 6, 5, 3, 1]);
sortStack(stack3);
const result3 = stackToString(stack3);
console.log(`Test case 3 | Expected: ${expected3} | Result: ${result3}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Test case 1 | Expected: [8,5,3,1] | Result: [8,5,3,1]
    Test case 2 | Expected: [9,7,4,2] | Result: [9,7,4,2]
    Test case 3 | Expected: [10,6,5,3,1] | Result: [10,6,5,3,1]

*/
