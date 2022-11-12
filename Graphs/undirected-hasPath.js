const graph = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n'],
]


const convertToGraph = (graph)=>{
    let body = {}

    for(let i of graph) {
        let [a,b] = i

        if(!body[a])    body[a] = []
        if(!body[b])    body[b] = []

        body[a].push(b)
        body[b].push(a)
    }


    return body

}

console.log(hasPath(convertToGraph(graph),'j','m'))


function hasPath(graph, src,dest,memo={}) {

    if(src === dest)    return true
    if(src in memo) return memo[src]
    memo[src] = src

    for(let i of graph[src]) {
        if(hasPath(graph,i,dest,memo))   return true
    }
    return false

}   