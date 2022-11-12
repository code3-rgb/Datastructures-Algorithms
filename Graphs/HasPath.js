const hasPath = (graph,src,dest)=>{

    let queue = [src]

    while(queue.length > 0) {

        let current = queue.shift()

        for(let i of graph[current]) {
            if(i === dest)  return true
            queue.push(i)
        }

    }

    return false

}


const graph = {
    'f':['g','i'],
    'g':['h'],
    'h':[],
    'i':['g','k'],
    'j':['i'],
    'k':[],
}


console.log(hasPath(graph,'f','j'))