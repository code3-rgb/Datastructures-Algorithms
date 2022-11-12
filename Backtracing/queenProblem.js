const formatBoard = (board)=>{

    let result = []

    for(let col=0; col<board.length; col++) {
        let newRow = new Array(board.length).fill(".")
        newRow[board[col]] = 'Q'
        result.push(newRow.join(''))
    }
    return result
}

const totalQueens  = (n)=>{

    const result = []

    const dfs = (i,n,slate=[])=>{  
        console.log(slate)
        let lastQ = i-1
        // column check 
        for(let prevQ=0; prevQ < lastQ; prevQ++) {
            if(slate[prevQ] === slate[lastQ])   return

            // diagonal check
            let rowDiff = Math.abs(prevQ-lastQ) 
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ]) 

            if(rowDiff === colDiff) return      

        }
        if(i === n) {
            result.push(slate.slice())
            return
        }
    
        for(let col=0; col<n; col++) {
            slate.push(col)
            dfs(i+1,n,slate)
            slate.pop()
        }

    }

    
    dfs(0,n)

    // return result
    console.log(result)
    return result.map(board=> formatBoard(board))
}

console.log(totalQueens(4))