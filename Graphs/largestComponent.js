
let  nums = [2,7,11,15], target = 9

const twoSum = (target,array)=>{


    if(target === 0)    return []
    if(target < 0)  return null

    let shortest = []

    for(let i in array) {
        let rem = target-array[i]
        let sum = twoSum(rem,array)


        if(sum !== null || shortest === null)     {
            shortest.push(...sum,parseInt(i))
        }
    } 

    return [...new Set(shortest)]

}


// console.log(twoSum(target,nums))


console.log(twoSum(9,[2,7,11,15]))
