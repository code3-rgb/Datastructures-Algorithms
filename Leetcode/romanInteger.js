

function roman(type) {

    switch(type) {
        case 'I': 
        return 1

        case 'V': 
        return 5

        case 'X': 
        return 10

        case 'L': 
        return 50

        case 'C': 
        return 100

        case 'M': 
        return 1000

        case 'D': 
        return 500
        
        case 'X': 
        return 10

    }

}

let s = 'MMMCMXCIX'


function romanToInt(s) {


        let array = s.split('')

        let res = []

        for(let i=0; i<array.length; i++) {
        res.push(roman(array[i]))
        }

        let j = 1
        for(let i =0; i<res.length; i++) {
        let val = res[i]
        for(let j =1; j<res.length; j++) {
            if(res[i] < res[j]) {
                res[i] = '-' + val
            }   else {
                res[i] = '+' + val
            }
        }


        }

        let total = 0
        for(let i of res) {
        total += Number(i)
        }

        return total
}

console.log(romanToInt(s))