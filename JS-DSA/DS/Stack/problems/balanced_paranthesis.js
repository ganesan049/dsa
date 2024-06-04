/*
Implement a function called isBalancedParentheses() that checks if a given string containing parentheses is balanced or not.

const input = "(()())";
const output = isBalancedParentheses(input);

The output should be true, as the input string contains balanced parentheses.

const input = ")(";
const output = isBalancedParentheses(input);

The output should be false, as the input string contains unbalanced parentheses.
*/

class Stack {
    constructor() {
        this.stackList = [];
    }
    isEmpty() {
        return this.stackList.length === 0;
    }
    push(value) {
        this.stackList.push(value);
        return this;
    }
    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    peek() {
        if (this.isEmpty) return null;
        return this.stackList[this.stackList.length - 1];
    }
}

function isBalancedParentheses1(input) {
    let stackList = new Stack();
    for (const i of input) {
        if (i === "(") {
            stackList.push(i);
        } else if (i === ")") {
            if(stackList.isEmpty() || stackList.pop() !== "("){
                return false;
            }
        }   
    }
    return stackList.isEmpty();
}

function isBalancedParentheses(input){
    let stackList = new Stack();
    for(const i of input){
        stackList.push(i);
    }
    
    let balanced = 0;
    while(!stackList.isEmpty()){
        if(balanced < 0){
            return false;
        }
        let popped = stackList.pop();
        if(popped === "("){
            balanced -= 1;
        }else{
            balanced += 1;
        }
    }
    return balanced === 0;
}

const input = "(()())";
const output = isBalancedParentheses(input);
console.log("should be true ", output)

const input1 = "()()";
const output1 = isBalancedParentheses(input1);
console.log("should be false ", output1)

const input2 = "(()))(())";
const output2 = isBalancedParentheses(input2);
console.log("should be false ", output2)