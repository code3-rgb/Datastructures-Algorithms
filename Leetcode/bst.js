function Node(data){
    this.data = data
    this.left = null
    this.right = null
    this.height = 1
}

let root = null

function bst(){

    this.preorder = (root)=>{
        if(root === null)   return
        console.log(root.data)
        this.preorder(root.left)
        this.preorder(root.right)
    }
    this.insert = (data,root)=> {
        if(root === null) {
            root = new Node(data)
            return root
        }
        if(data < root.data){
            root.left = this.insert(data,root.left)
        }
        if(data > root.data){
            root.right = this.insert(data,root.right)
        }

        root.height = this.findheight(root)
        let balance = this.balanceFactor(root)

        if(balance > 1) {
            if(data < root.left.data) return this.rightRotate(root)
            if(data > root.left.data) {
                root.left = this.leftRotate(root.left)
                return this.rightRotate(root)
            }
        }
        if(balance < -1) {
            if(data > root.right.data)  return this.leftRotate(root)
            if(data < root.right.data) {
                root.right = this.rightRotate(root.right)
                return this.leftRotate(root)
            }
        }
        console.log('end')
        return root
    }

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
                if(j === "") process.stdout.write(".")    
                else process.stdout.write(j)
                
                
            }
        }
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


    // Avl Implementation
    this.rightRotate = (root)=>{
        let x = root.left
        let y = x.right
        x.right = head
        root.left = y
        root.height = this.findheight(root)
        x.height = this.findheight(x)

        return x
    }
    this.leftRotate = (root)=>{
        let x = root.right
        let y = x.left
        x.left = head
        root.right = y
        root.height = this.findheight(root)
        x.height = this.findheight(x)

        return x
    }
    this.Height = (root)=>{
        if(root === null)   return
        return root.height
    }
    this.balanceFactor = (root)=>{
        if(root === null)   return
        return this.Height(root.left)-this.Height(root.right)
    }

}

const tree = new bst()

root = tree.insert(10,root)
root = tree.insert(11,root)
root = tree.insert(12,root)

tree.preorder(root)

tree.displayTree(root)
root = tree.insert(33,root)
tree.displayTree(root)

