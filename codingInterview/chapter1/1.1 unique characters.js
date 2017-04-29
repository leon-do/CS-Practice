//Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?

// sets are like an objects but the values are unique

function checkUnique(arr){
    var mySet = new Set(arr)

    return (mySet.size === arr.length)
}


console.log(checkUnique([1,2,3,54,6,3,46,2,3,45,6]))