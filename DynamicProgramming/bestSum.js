const best_sum = (target,array)=>{

    if(target === 0)    return []
    if(target < 0)  return null

    let shortest = null

    for(let i of array){
        let rem = target - i
        let sum = best_sum(rem,array)

        if(sum !== null || shortest === null)  {
            shortest = [...sum,i]
        }
    }
    return shortest
    
}

console.log(best_sum(7,[1,5]))