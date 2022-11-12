const graph = {
    'a': ['c','b'],
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': [],
}


function depthFirst (graph,src){

    console.log(src)

    for(let i of graph[src]) {
        depthFirst(graph,i)
    }

}

depthFirst(graph,'a')
