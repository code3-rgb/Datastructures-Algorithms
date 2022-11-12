function insert(array) {

    let key 

    for(let i = 1; i < array.length; i++) {

        key = array[i]
        let j = i-1

        while(j >= 0 && array[j] > key) {

            array[j+1] = array[j]
            j = j-1

        }

        array[j+1] = key 

    }

}


let array = [5,4,3,2,1]

insert(array)

console.log(array)