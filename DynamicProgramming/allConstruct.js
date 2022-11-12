const allConstruct = (target,wordbank) =>{
    if(target === '')   return [[]]

    const result = []

    for(let word of wordbank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix,wordbank)
            const targetWays = suffixWays.map(way => [word,...way])
            result.push(...targetWays)
        }
    }
    return result
}


console.log(allConstruct('purple',['purp','p','ur','le','purpl']))
