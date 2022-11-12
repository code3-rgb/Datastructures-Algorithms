

const process = require('process')

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
        this.height = 1
    }
}


class BST {
    constructor() {
        this.head = null
    }

    insert (data) {

        const helper = (head) =>{
        if(head === null) {
            head = new Node(data)
            return head
        }

        if(data < head.data) {
            head.left = helper(head.left)
            return head
        }
        if(data > head.data) {
            head.right = helper(head.right)
            return head
        }
        head = this.doRotate(head)

        

    }
    this.head = helper(this.head)
}
  
    doRotate(head) {
        console.log('working')
        head.height = this.findHeight(head)
        let balance = this.getBalance(head)
        if(balance > 1) {
            if(data < head.left.data) {
                return this.rightRotate(head)
            }
            else if(data > head.left.data) {
                head.left = this.leftRotate(head.left)
                return this.rightRotate(head)
            }
        }
        if(balance < -1) {
            if(data > head.right.data) {
                return this.leftRotate(head)
            }
            else if(data < head.right.data) {
                head.left = this.rightRotate(head.right)
                return this.leftRotate(head)
            }
        }
        return head
    }

    rightRotate(head) {
        let x = head.left
        let y = x.right

        x.right = head
        head.left = y
        head.height = this.findHeight(head)
        x.height = this.findHeight(x)
        console.log('working right')
        return x
    }

    leftRotate(head) {
        let x = head.right
        let y = x.left

        x.left = head
        head.right = y
        head.height = this.findHeight(head)
        x.height = this.findHeight(x)
        console.log('working left')
        return x
    }



    preOrder() {

        const helper = (head)=>{
            if(head === null) return

            console.log(head.data) 
            helper(head.left)
            helper(head.right)
        }

        helper(this.head)
    }

    // find height 
    findHeight(root=this.head){
        if(root === null) return 0;
        
        return 1+Math.max(this.findHeight(root.left),this.findHeight(root.right));
        
        }

    // Get balance
    getBalance(root = this.head) {
        if(root === null) {
            return 
        }
        return this.findHeight(root.left) - this.findHeight(root.right)
    }



//  Print tree functionality

 makeTree (){
    const M = this.heightOfTree(this.head);
    const matrix = this.generateMatrix(M);
    
    this.populate(this.head, matrix, 0, 0, matrix[0].length - 1);
    
    return matrix;
}

 populate (node, matrix, level, L, R) {
    if(!node) return;
    
    const middle = ((R - L) / 2) + L;
    matrix[level][middle] = `${node.data}`;
    
    this.populate(node.left, matrix, level + 1, L, middle - 1);
    this.populate(node.right, matrix, level + 1, middle + 1, R);
};

 generateMatrix (M){
    const n = (2 ** M) - 1;
    const matrix = new Array(M)
                    .fill('')
                    .map(row => new Array(n).fill(''));
    return matrix;   
};

 heightOfTree (node=this.head){
    if(!node) return 0;
    
    const heightLeft = this.heightOfTree(node.left);
    const heightRight = this.heightOfTree(node.right);
    
    return 1 + Math.max(heightLeft, heightRight);
};

displayTree () {
    let matrix = this.makeTree()

    for(let i of matrix) {
        console.log('')
        for(let j of i ) {
            if(j === "") process.stdout.write(".")    
            else process.stdout.write(j)
            
            
        }
    }
}


// avl tree

} 

const newBst = new BST()

newBst.insert(10)
newBst.insert(11)
newBst.insert(9)
newBst.insert(7)
newBst.insert(8)
newBst.insert(30)
newBst.insert(5)

newBst.displayTree()
// console.log(newBst.findHeight())