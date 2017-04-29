// Write a method to generate the nth Fibonacci number.


// 0 1 1 2 3 5 8
function fibonacci(n, a, b){
    if (n === 0){
        return;
    }
    n--;
    console.log(a + b)
    fibonacci(n, b, a+b)
}


fibonacci(10, 0, 1)