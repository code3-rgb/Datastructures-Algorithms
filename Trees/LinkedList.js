
const newLink = new LinkList()

let root = null

root = newLink.insert(root,1)
root = newLink.insert(root,2)
root = newLink.insert(root,3)
root = newLink.insert(root,4)

newLink.display(root)   

console.log('first display')

root = newLink.reverse(root)

newLink.display(root)



function Node (data) {
    this.data = data
    this.next = null
}


function LinkList () {
    this.insert = (root,data)=>{
        if(root === null) {
            root = new Node(data)
            return root
        }

        let curr = root 
        let prev 
        while(curr !== null) {
            prev = curr
            curr = curr.next
        }
        prev.next = new Node(data)   

        return root
    }

    this.display = (root)=>{
        if(root === null)  return 

        let curr = root
        while(curr !== null) {
            console.log(curr.data)
            curr = curr.next
        }
    }

    // this.reverse = (root)=> {

    //     let curr = root
    //     let prev = null

    //     while(curr !== null) {
    //         let temp = curr.next
    //         curr.next = prev
    //         prev = curr
    //         curr = temp
    //     }
    //     return prev

    // }

    this.reverse = (root) =>{
        if(root === null || root.next === null) return root

        let newHead = this.reverse(root.next)
        let headNext = root.next
        headNext.next = root
        root.next = null

        return newHead

    }

}

