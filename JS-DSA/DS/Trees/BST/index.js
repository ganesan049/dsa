class NodeClass {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        // this.count = 1; // for handling duplicates
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new NodeClass(value);
        if(this.root == null){
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if(newNode.value == temp.value) return undefined;
            if(newNode.value > temp.value){
                if(temp.right == null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }else{
                if(temp.left == null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
        }
    }

    contains(value){
        if(this.root == null) return false;
        let temp = this.root;
        while(temp != null){
            if(temp.value > value){
                temp = temp.left;
            }else if(temp.value < value){
                temp = temp.right;
            }else{
                return true;
            }
        }
        return false;
    }
}

let myBST = new BST();

myBST.insert(2);
myBST.insert(1);
console.log(JSON.stringify(myBST.insert(3)));