const gridTraveller = (row,col,memo={})=> {

    if(row+','+col in memo) return memo[row+','+col]
    if(row === 0 || col === 0)  return 0
    if(row === 1 && col === 1) return 1

    memo[row+','+col] = gridTraveller(row,col-1,memo) + gridTraveller(row-1,col,memo)
    return memo[row+','+col]
}

console.log(gridTraveller(4,4))