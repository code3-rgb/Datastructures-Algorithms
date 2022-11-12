let s = "()"


let obj = {
    '(':')',
    '[':']',
    '{':'}'
}


let stack = []


for(let i of s) {

    if(obj[i]) stack.push(obj[i])
    else if(stack.length > 0 && stack[stack.length-1] === i){
        stack.pop()
    }   else {
        console.log('false')
        break
    }

}






