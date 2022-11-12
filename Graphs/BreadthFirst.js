

const graph = {
    'a': ['c','b'],
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': [],
}




function breadthFirst (graph,src){

    let stack = [src]

    console.log(src)

    while(stack.length !== 0) {
        for(let i of graph[stack.shift()]) {
            console.log(i)
            stack.push(i)
        }
    }

}



breadthFirst(graph,'a')