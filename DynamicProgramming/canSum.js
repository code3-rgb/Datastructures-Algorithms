const can_sum = (sum, array,memo={}) =>{
    if(sum in memo) return memo[sum]
    
    if(sum === 0) {
        return true
    }
    if(sum < 0) return false

    for(let i of array) {

        let tst = sum - i

        if(can_sum(tst,array,memo))  {
            memo[sum] = true
            return true
        }

    }
    memo[sum] = false
    return false

}

let array = [5,3,4,2,7]

console.log(can_sum(7,array))
console.log(can_sum(6,[3,2,3]))