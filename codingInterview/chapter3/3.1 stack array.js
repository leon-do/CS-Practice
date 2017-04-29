// Describe how you could use a single array to implement three stacks.



var arr = [0,1,2,3,4,5,6,7,8]

//[[0,1,2], [3,4,5], [6,7,8]]
var outerArray = [];
var innerArray = [];

for (var i = 0; i < arr.length; i++){
    innerArray.push(arr[i])
    if (i + 1 % 3 == 0){
        outerArray.push(innerArray);
        innerArray = [];
    }
}

console.log(outerArray)