let number = [1,5,3,2,4]
// let number = [32,0,63,8]

const pairs = (array,n)=>{

    let arr = []
    for(let i = 0 ; i<array.length; i++) {
        let count = 0
        let res = array[i]
        let j = 0

        while(j < array.length) {
            res -= array[j]
            if(res === n) {
                arr.push([array[i],array[j]])
            }
            res = array[i]
            j++
        }



    }
    return arr.length

}

console.log(pairs(number,1))