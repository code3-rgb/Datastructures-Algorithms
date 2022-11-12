function heap () {

    this.storage = []
    this.size = 0

    this.insert = (data)=> {
        this.storage[this.size] = data
        this.size += 1
        this.heapifyUp()
    }

    this.heapifyUp = ()=>{
        let index = this.size - 1

        while(this.hasParent(index) && this.parent(index) > this.storage[index]) {
            this.swap(this.getParent(index),index)
            index = this.getParent(index)
        }

    }

    this.parent = (index) =>{
        return this.storage[this.getParent(index)]
    }

    this.left = (index) =>{
        return this.storage[this.getLeft(index)]
    }
    this.hasLeft = (index) =>{
        return this.getLeft(index) < this.size
    }

    this.right = (index) =>{
        return this.storage[this.getRight(index)]
    }
    this.hasRight = (index)=>{
        this.getRight(index) < this.size
    }
    this.getParent = (index)=>{
        return Math.floor((index-1)/2)
    }
    this.hasParent = (index)=>{
        return this.getParent(index) >= 0
    }
    this.getLeft = (index)=>{
        return Math.floor((2 * index + 1))
    }
    this.getRight = (index)=>{
        return Math.floor((2 * index + 2))
    }
    this.swap = (index1,index2)=>{
        [this.storage[index1],this.storage[index2]] = [this.storage[index2],this.storage[index1]]
    }


    // Removing 
    this.removeMin = ()=>{

        if(this.size === 0) {
            return "Heap is Empty"
        }

        this.storage[0] = this.size - 1
        this.size -= 1
        this.heapifyDown()

    }   
    this.heapifyDown = ()=>{

        let index = 0

        while(this.hasLeft(index)) {

            let smallerChild = this.getLeft(index)
            if(this.hasRight(index) && this.right(index) < this.left(index)) {
                smallerChild = this.getRight(index)
                if(this.storage[index] < this.storage[smallerChild])    break
                else {
                    this.swap(index,smallerChild)
                    index = smallerChild
                }
            }

        }

    }

    this.display = ()=> {
        return this.storage
    }

}



let max = new heap()

max.insert(10)
max.insert(20)
max.insert(5)
max.insert(15)
max.insert(12)

console.log(max.display())    