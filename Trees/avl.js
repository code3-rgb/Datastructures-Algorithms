function Node (data) {
    this.left = null
    this.data = data
    this.right = null
    this.height = 1
}


let head = null


function avl () {

    this.max = function(a,b) {
        return (a > b)?a:b
    }

    // Left rotation 
    this.leftRotate = function (head) {
        let x = head.right
        let y = x.left
        x.left = head
        head.right = y
        head.height = Math.max(this.height(head.left),this.height(head.right)) + 1
        x.height = Math.max(this.height(x.left),this.height(x.right)) + 1
        return x 
    }

    // Right rotation
    this.rightRotate = function (head) {
        let x = head.left
        let y= x.right
        x.right = head
        head.left = y
        head.height = Math.max(this.height(head.left),this.height(head.right)) + 1
        x.height = Math.max(this.height(x.left),this.height(x.right)) + 1
        return x
    }


    this.height = function(head) {
        if(head === null)   return
        return head.height
    }

    this.getBalance = function(head) {
        if(head === null)   return
        return this.height(head.left) - this.height(head.right);
    }

 
 

    this.insert = function(data,head) {
        if(head === null) {
            head = new Node(data)
            return head
        }


        if(data < head.data)   {
            head.left = this.insert(data,head.left)
        }
        if(data > head.data)   {
            head.right = this.insert(data,head.right)
          }

        head.height = 1 + Math.max(this.height(head.left),this.height(head.right))

        
      // update the balance ` of each node
      // and, balance the tree

      
      let balanceFactor = this.getBalance(head);
      if (balanceFactor > 1) {
        if (data < head.left.data) {
          // console.log('working')
          return this.rightRotate(head);
        }
        else if (data > head.left.data) {
          // console.log('lr rotate')

          head.left = this.leftRotate(head.left);
          return this.rightRotate(head);
        }
      }
      
      if (balanceFactor < -1) {
        if (data > head.right.data) {
          return this.leftRotate(head);
        } else if (data < head.right.data) {
          head.right = this.rightRotate(head.right);
          return this.leftRotate(head);
        }
      }
      // console.log('end')
      return head

    }
    this.display = function(head) {
            if(head === null) return

            console.log(head.data)
            this.display(head.left)
            this.display(head.right)
        
    }

    // get node with minimum value
    this.nodeWithMimumValue = (node) => {
      let current = node;
      while (current.left !== null){
          current = current.left;
      }
      return current;
    }

     // Helper function for Deleting 
     const deleteNodeHelper = (root, data) => {
  
        // Find the node to be deleted and remove it
        if (root == null){
          return root;
        }
        if (data < root.data){
          root.left = deleteNodeHelper(root.left, data);
        }else if (data > root.data){
          root.right = deleteNodeHelper(root.right, data);
        }else {
          if ((root.left === null) || (root.right === null)) {

            let temp = null;
            if (temp == root.left)  {
              temp = root.right;
            }
            else  {
              temp = root.left;
            }
            
            if (temp == null)   {
              temp = root;
              root = null;
            }
            else{
              root = temp;
            }

          }    
          
          else {
            let temp = this.nodeWithMimumValue(root.right);
            root.data = temp.data;
            root.right = deleteNodeHelper(root.right, temp.data);
          }




        }


        if (root == null){
          return root;

        }
    
        // Update the balance factor of each node and balance the tree
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        
        let balanceFactor = this.getBalance(root);
        if (balanceFactor > 1) {
          if (this.getBalance(root.left) >= 0) {
            return this.rightRotate(root);
          } else {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
          }
        }
        if (balanceFactor < -1) {
          if (this.getBalance(root.right) <= 0) {
            return this.leftRotate(root);
          } else {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
          }
        }
        return root;
      }
      




    this.deleteNode = (data,head) => {
        root = deleteNodeHelper(head, data);
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

}



const Avl = new avl()


class treeDisp {


  



}




head = Avl.insert(33,head)
head = Avl.insert(13,head)
head = Avl.insert(53,head)
head = Avl.insert(9,head)
head = Avl.insert(21,head)
head = Avl.insert(61,head)
head = Avl.insert(8,head)
head = Avl.insert(11,head)
// Avl.display(head)
Avl.displayTree(head)

head = Avl.deleteNode(13,head);
head = Avl.deleteNode(8,head);
head = Avl.deleteNode(53,head);
head = Avl.deleteNode(61,head);
console.log("\n\nAfter Deletion: ");
head = Avl.insert(10,head)
head = Avl.insert(12,head)
head = Avl.insert(12,head)

// Avl.display(head)
Avl.displayTree(head)
