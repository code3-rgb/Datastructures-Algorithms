const can_construct  = (word,words,memo={}) =>{
    if(word in memo) return memo[word]
    if(word === '') return true

    for(let wrd of words) {
        if(word.indexOf(wrd) === 0) {
            let suffix = word.slice(wrd.length)
            let bool = can_construct(suffix,words)
            if(bool === true) {
                memo[word] = true
                return true
            }

        }
    }
    memo[word] = false
    return false

}

let word = 'bread'
console.log(can_construct(word,['a','bre','d','c']))
console.log(can_construct('heaven',['hea','pp','ve','n','l']))
console.log(can_construct('eeeeeeeeeeeeeeeegeeeeeeeefeeeeeeeeee',
[
    'eeeeeee',
    'eeee',
    'eeee',
    'eeeee',
    'eeeeeee',
]))


