const sudokuSolver = (board,row,col)=>{

    if(row === board.length - 1 && col === board.length)    return true
    if(col === board.length) {
        row++
        col = 0
    }
    if(board[row][col] !== 0) return sudokuSolver(board,row,col+1)


    for(let number = 1; number<10; number++) {

        if(isSafe(board,row,col,number)) {
            board[row][col] = number
            if(sudokuSolver(board,row,col+1))    return true
        }
        board[row][col] = 0

    }
    return false

}

function isSafe(board,row,col,number) {

    for(let i = 0; i<=8; i++) {
        if(board[row][i] === number)   return false
    }
    for(let i = 0; i<=8; i++) {
        if(board[i][col] === number)   return false
    }

    let rowStart = row - row%3
    let colStart = col - col%3

    for(let i = 0; i<3; i++) {
        for(let j = 0; j<3; j++) {
            if(board[i+rowStart][j+colStart] === number)    return false
        }
    }

    return true

}


let grid = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
			[ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
			[ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
			[ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
			[ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
			[ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
			[ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ]



if(sudokuSolver(grid,0,0))  console.table(grid)
