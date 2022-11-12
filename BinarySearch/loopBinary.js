let array = [1,2,3,4,5,6,7,8,9,10]
let bottom = 0
let top =  array.length
let result

let find = 1

while(top > bottom) {

    let mid = Math.floor((top+bottom)/2)
    
    if(array[mid] > find) {
        top = mid
    }
    else if(array[mid] < find) {
        bottom = mid
    }
    else {
        console.log(array[mid])
        console.log(mid)
        break
    }
}

