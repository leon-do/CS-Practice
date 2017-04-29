//Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time

function findMissingNum(arr, min, max){

    var expectationTotal;
    var realityTotal = 0;

    // calculates expectationTotal
    if ((max - min + 1) % 2 === 0){
        //even
        expectationTotal = (min + max) * Math.ceil((max - min)/2)
    } else {
        //odd
        expectationTotal = (min + max) * (max - min)/2 + (min + max)/2    
    }

    // calculates realityTotal
    for (let i = 0; i < arr.length; i++){
        realityTotal = realityTotal + arr[i]
    }

    return expectationTotal - realityTotal
}

var answer = findMissingNum([5,6,8,2,3,4], 2, 8)

console.log(answer)