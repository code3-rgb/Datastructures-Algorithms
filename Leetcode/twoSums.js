const twoSum = function(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let ch = nums[i]
        if (ch in hash) return [hash[ch], i]
        hash[target-ch] = i
    }

   
};


console.log(twoSum([2,1,6,3,4],6))