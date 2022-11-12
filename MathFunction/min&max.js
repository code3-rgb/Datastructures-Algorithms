
let scores = [1,2,3,4,5,6,7]

// Reduce function to find the min and max from and array 

let minMax = scores.reduce((a,b)=>[ Math.min(a[0],b), Math.max(a[1],b) ],[100,0])


console.log(minMax)