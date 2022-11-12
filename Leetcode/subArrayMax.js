

function maxSubarray(nums) {




    let result = nums[0]

    for(let i = 1; i<nums.length; i++) {
    nums[i] = Math.max(nums[i],nums[i] + nums[i-1])
    result = Math.max(nums[i],result)
    }

    return (result) 


}


// let nums = [-2,1,-3,4,-1,2,1,-5,4]
let nums = [1,2,3,4,5,6]

console.log(maxSubarray(nums))