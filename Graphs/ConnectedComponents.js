
const graph = {
    3 : [],
    4 : [6],
    6 : [4,7,5,8],
    8 : [6],
    7 : [6],
    5 : [6],
    1 : [2],
    2 : [1]
}


function conn (graph){

    const visited = new Set()
    let count = 0

    for(let i in graph) {

        if(explore(graph,i,visited))    count+=1

    }

    return count

    function explore (graph,current,visited){

        if(visited.has(String(current)))    return false

        visited.add(String(current))

        for(let neighbour of graph[current]){
            explore(graph,neighbour,visited)
        }

        return true

    }


}

console.log(conn(graph))