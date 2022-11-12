function binarySrch (arr,start,end,target) {
    if(start > end) return false

    let midIndx = Math.floor((start+end)/2) 

    if(arr[midIndx] === target) return true

    if(arr[midIndx] > target)    return binarySrch(arr,start,midIndx-1,target)
    else return binarySrch(arr,midIndx+1,end,target)
}


let arr = [1,2,3,4,5,6,7]


console.log(binarySrch(arr,0,arr.length-1,7))
