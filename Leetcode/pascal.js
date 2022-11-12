

// function pascal(row) {

//     let len = 1
//     let array = []
//     for(let i =0; i<row; i++) {

//         for(let j=0; j<=i; j++) {

//             if(j === 0) {
//                  process.stdout.write('1')
//                  array.push([1])
//             }
//             if(j === i) {
//                 process.stdout.write('1')
//                 array[i].push(1)
//             }
//             if(j !== i) {
//                 let temp = 1+1
//                 process.stdout.write(`${temp}`)
//                 array[i].push(temp)
//             }

//         }
//         // console.log()
        
//     }

//     let arr_len = 1
//     for(let i =0; i<row; i++) {
//         len = 1
//         if(arr_len === array.length)    break

//         for(let j= 0; j<array[i].length; j++) {
//             let total = 0

//             if(j+1 === array[i].length) break
//             total = array[i][j] + array[i][j+1]
//             // console.log(total)
            

//             if(array[arr_len][len] !== 1)
//             array[arr_len][len] = total

//             len++
//         }
//         arr_len++

//     }

//     array.unshift([1])

//     console.table(array)

// }

// pascal(7)



// const pascal = (n)=>{
//     let array = []
//     for(let line = 1; line <= n; line++)    {
    
//         let C=1;
//         let temp = []
//         for(let i = 1; i <= line; i++)
//         { 
//             temp.push(C)
//             C = C * (line - i) / i; 
//         }
//             array.push(temp)
//     }
//     console.log(array)
// }

// pascal(5)


const pascal = (n)=>{
    n +=1
    for(let line = 1; line <= n; line++)    {
    
        let C=1;
        let temp = []
        for(let i = 1; i <= line; i++)
        { 
            temp.push(C)
            C = C * (line - i) / i; 
        }
        if(n === line) return temp
    }

}

console.log(pascal(3))