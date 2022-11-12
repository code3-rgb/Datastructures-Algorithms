function fibo (n,memo={}) {

    if(n <= 2)  return 1
    if(n in memo) return memo[n]

    memo[n] = fibo(n-1,memo) + fibo(n-2,memo)
    return memo[n]

}


console.log(fibo(10))
 
// Fibonacci using iterative process

const fib = new Array(10).fill(0)
fib[0] = 0
fib[1] = 1



for(let i =0; i<10; i++) {
   let temp = fib[i]+fib[i+1]
    fib[i+2] = temp
}



console.log(fib)



