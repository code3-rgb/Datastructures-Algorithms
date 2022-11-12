const array = [
    [1,1,0,1],
    [1,0,1,0],
    [1,1,1,0],
    [0,0,1,1]
]

const path = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

function findPath (i,j,n) {
    if(i === n-1 && j === n-1) {
        path[i][j] = 1
        return 1
    }    
    if(array[i][j] === 1) {

        path[i][j] = 1

    // console.log(path)
    // row
    if(findPath(i,j+1,n) === 1)    return 1
    // column/bottom
    if(findPath(i+1,j,n) === 1)    return 1

        path[i][j] = 0

    }
    return 0

}


findPath(0,0,4)


// for(let i =0; i<4; ++i) {
//     for(let j = 0; j<4; j++) {
//         if(path[i][j])
//         console.log(i+' '+j)
//     }
// }

console.table(path)