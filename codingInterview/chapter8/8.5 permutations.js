var answer = 99;

quarters = Math.floor(answer / 25)
console.log(quarters)

dimes = Math.floor((answer - quarters * 25) / 10)
console.log(dimes)

nickels = Math.floor((answer - quarters * 25 - dimes * 10) / 5)
console.log(nickels)

pennies = Math.floor((answer - quarters * 25 - dimes * 10 - nickels * 5) / 1)
console.log(pennies)