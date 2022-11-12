class stack {
    constructor() {
        this.Stack = []
    }

    push(data) {
        this.Stack.push(data)
    }
    pop() {
        console.log(this.Stack.pop()+' is popped of stack!')
    }
    display() {
        console.log(this.Stack)
    }
    search(data) {
        let i = 0
        while(i < this.Stack.length) {
            if(this.Stack[i] === data) return console.log(data+' is found in the stack!')
            i++
        }
        console.log(data+' is not found!')
    }


}

const tst = new stack()


tst.push(22)
tst.push(21)
tst.push(25)
tst.pop()
tst.search(22)
tst.search(25)
tst.display()