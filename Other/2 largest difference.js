//Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element

var array = [7, 8,8, 4, 9, 9, 15, 3, 1, 10];

var currentMin = array[0];
var currentMaxDifference = 0;

for (var i = 0; i < array.length; i++){
    if (array[i] - currentMin > currentMaxDifference){
        currentMaxDifference = array[i] - currentMin
    } else if (currentMin > array[i]){
        currentMin = array[i]
    }
}

console.log(currentMaxDifference)