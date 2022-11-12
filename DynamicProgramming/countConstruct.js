const countConstruct = (target,wordbank,memo={})=>{
    if(target in memo)  return memo[target]
    if(target === '') return 1

    let totalCount = 0

    for(let word of wordbank) {
        if(target.indexOf(word) === 0) {
            const numways = countConstruct(target.slice(word.length),wordbank,memo)
            totalCount += numways
        }
    }

    memo[target] = totalCount
    return totalCount

}





console.log(countConstruct('purple',['purp','p','ur','le','purpl']))
console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeeee','eeeeeee']))