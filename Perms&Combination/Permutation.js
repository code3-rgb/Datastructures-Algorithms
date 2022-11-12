const permutation = (elements)=>{

    if(elements.length === 0)   return [[]]

    const felement = elements[0]
    const rest = elements.slice(1)
    const permsWithoutFirst = permutation(rest)

    const allPermutation = []

    permsWithoutFirst.forEach(val=>{
        for(let i = 0; i<= val.length; i++)  {
            const permWithFirst = [...val.slice(0,i), felement, ...val.slice(i)]
            allPermutation.push(permWithFirst)
        }
    })

    return allPermutation

}

console.log(permutation(['l','e','t']))