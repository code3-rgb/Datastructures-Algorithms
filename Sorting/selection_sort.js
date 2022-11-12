const sort = (array)=>{

    let min_idx = 0

    for(let i = 0 ; i<array.length; i++) {

        min_idx = i
        for(let j = i+1; j<array.length; j++)
            if(array[j] < array[min_idx]) {
                [array[j],array[min_idx]] = [array[min_idx],array[j]]
            }   else 
                    min_idx = j
        }


    return array

}


let array = [5,4,3,2,1]

console.log(sort(array))