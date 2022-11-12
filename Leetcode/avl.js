class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
        this.height = 0
    }
}

class Avl {
    constructor(){
        this.root = null
    }

    height(node) {
        if(node === null)   return
        return node.height
    }
    getHeight(node) {
        return node === null ? -1 : node.height
    }
    getBalance(node) {
        return this.getHeight(node.left)-this.getHeight(node.right)
    }

    // Rotations
    leftRotate(x){
        let y = x.right
        let yLeft = y.left
        y.left = x
        x.right = yLeft
        x.height = Math.max(this.height(x.left),this.height(x.right)) + 1
        y.height = Math.max(this.height(y.left),this.height(y.right)) + 1

        return y
    }

    rightRotate(x){
        let y = x.left
        let yRight = y.right
        y.right = x
        x.left = yRight
        x.height = Math.max(this.height(x.left),this.height(x.right)) + 1
        y.height = Math.max(this.height(y.left),this.height(y.right)) + 1

        return y
    }

    insertNode(data) {
        if(this.root){
            this.root = this.insert(data,this.root)
        }   else {
            this.root = new Node(data)
        }

    }

    // Insertion
    insert(data,node = this.root){

        if(node === null)   return new Node(data)
        if(data < node.data)
        node.left = this.insert(data,node.left)
        if(data > node.data)
        node.right = this.insert(data,node.right)
        

        // Avl
        node.height = Math.max(this.getHeight(node.left),this.getHeight(node.right)) + 1

        if(this.getBalance(node) == 2 && this.getBalance(node.left) >= 2)   return this.rightRotate(node)
        if(this.getBalance(node) == 2 && this.getBalance(node.left) < 0)   {
            node.left = this.leftRotate(node.left)
            return this.rightRotate(node)
        }
        if(this.getBalance(node) == -2 && this.getBalance(node.right) <= 0)   return this.leftRotate(node)
        if(this.getBalance(node) == -2 && this.getBalance(node.right) > 0)   {
            node.right = this.rightRotate(node.right)
            return this.leftRotate(node)
        }

        return node
    }

    // Preorder
    preOrder(node = this.root){
        if(node === null)   return
        console.log(node.data)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    printTree() {
        PrintTree(this.root)
    }

}


function PrintTree(root) {

    if(root === null)   return

     // Find the height
     this.findheight = (root)=>{
        if(!root)   return 0

        const heightLeft = this.findheight(root.left);
        const heightRight = this.findheight(root.right);

        return 1 + Math.max(heightLeft,heightRight)
    }

    // Print tree Structure
    this.makeTree = (root)=> {
        let height = this.findheight(root)
        let matrix = this.matrix(height)

        this.populate(root,matrix,0,0,matrix[0].length-1)
        return matrix
    }
    

    this.displayTree = (root)=>{
        let matrix = this.makeTree(root)
        for(let i of matrix) {
            console.log('')
            for(let j of i ) {
                if(j === "") process.stdout.write(" ")    
                else process.stdout.write(j)
                
                
            }
        }
        console.log('')
    }

    this.populate = (root,matrix,level,left,right)=>{
        if(root === null)   return

        let mid = ((right-left)/2) + left
        matrix[level][mid] = `${root.data}`

        this.populate(root.left,matrix,level+1,left,mid-1)
        this.populate(root.right,matrix,level+1,mid+1,right)
    }
    this.matrix = (row)=>{
        let col = ((2**row)-1)
        let res = new Array(row).fill('').map(rows=> new Array(col).fill(''))
        return res
    }
    // Call the Display Tree Structure
    this.displayTree(root)

}

let avl = new Avl()



avl.insertNode(10)
avl.insertNode(5)
avl.insertNode(11)
avl.insertNode(4)
avl.insertNode(6)
avl.insertNode(12)
avl.insertNode(13)
avl.insertNode(7)
avl.insertNode(8)
avl.insertNode(21)
avl.insertNode(20)

avl.insertNode(3)





// avl.preOrder()
avl.printTree()
