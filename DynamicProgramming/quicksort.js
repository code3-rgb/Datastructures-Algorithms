const sortArray = function(array,left=0,right=array.length-1) {

    if(left < right) {

        let pivot_location = Pivot(array,left,right)
        sortArray(array,left,pivot_location-1)
        sortArray(array,pivot_location+1,right)

    }
    return array
}

function Pivot(array,left,right) {

    let pivot=right,j=left,i=left-1

    while(j <= pivot) {
        if(array[j] < array[pivot]) {
            i++
            [array[i],array[j]] =  [array[j],array[i]]
            j++
        }
        else {
            j++
        }
    }
    i++
    [array[i],array[pivot]] =  [array[pivot],array[i]]
    return i

}

let array = [9,6,5,4,3,2,1]

console.log(sortArray(array,0,array.length-1))


