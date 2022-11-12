

function printHcf(num1,num2) {

    let hcf = 0

    for(let i = 1; i <=num1 && i<=num2; i++) {
        if(num1 % i === 0 && num2 % i === 0) {
            hcf = i
        }
    }

    console.log(`Highest Common Factor for ${num1} & ${num2} is ${hcf}`)
}

printHcf(20,35)