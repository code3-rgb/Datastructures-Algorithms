

const PrintMaxActivities = (array1,array2)=>{


    console.log("Following Activities are Selected: ")

    // array1.sort((a,b)=> a-b)
    // array2.sort((a,b)=> a-b)


    let i = 0

    console.log(i)

    for(let j = 1; j<array1.length; j++) {

        if(array1[j] >= array2[i]) {
            console.log(j)
            i = j
        }

    }

}


let arr1 =  [1, 3, 0, 5, 8, 5]
let arr2 =  [2, 4, 6, 7, 9, 9]

PrintMaxActivities(arr1,arr2)