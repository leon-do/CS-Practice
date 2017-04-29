function factorial(num){
    var answer = 1;
    for (let i = 1; i <= num; i++){
        answer = answer * i
    }
    return answer
}

console.log(factorial(3))





function nFactorial(n) {
   if (n === 0){
    return 1;
   }
   return n * nFactorial(n-1);
}

console.log(nFactorial(3))


/*

return 5 * factorial(4)

return 5 * ( 4 * factorial(3) )

return 5 * ( 4 * ( 3 * factorial(2) ) )

return 5 * ( 4 * ( 3 * ( 2 * factorial(1) ) ) )

return 5 * ( 4 * ( 3 * ( 2 * 1 ) ) )

*/