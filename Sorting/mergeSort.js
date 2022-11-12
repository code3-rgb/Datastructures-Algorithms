// Merge Sort

const merge = (array)=>{
    if(array.length <= 1)  return array
    
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0,mid)
    let right = array.slice(mid,array.length)

    return sort(merge(left),merge(right))
}


const sort = (left,right)=>{

    let leftIdx = 0 , rightIdx = 0
    let result = []

    while(leftIdx < left.length && rightIdx < right.length) {

        if(left[leftIdx] < right[rightIdx]) {
            result.push(left[leftIdx])
            leftIdx++
        }
        if(left[leftIdx] > right[rightIdx]) {
            result.push(right[rightIdx])
            rightIdx++
        }

    }

    return result.concat(left.slice(leftIdx),right.slice(rightIdx))

}


let array = [5,4,3,2,1]

console.log(merge(array))