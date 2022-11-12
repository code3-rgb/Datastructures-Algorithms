const how_sum = (sum,array,memo={}) =>{
    if(sum in memo)  return memo[sum]
    if(sum === 0)   return []
    if(sum < 0) return null

    for(let i of array) {
        let tst = sum-i
        let arr = how_sum(tst,array,memo)
        memo[sum] = arr

        if(arr !== null) {
            
             return [...arr,i]
        }
    }
    return null
}

let array = [3,2,4]

console.log(how_sum(6,array))