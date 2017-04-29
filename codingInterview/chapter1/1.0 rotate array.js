// A sorted array has been rotated so that the elements might appear in the order 3 4 5 6 7 1 2


var arr = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
//var arr = [55, 66, 1, 2, 3, 4,5,6,7,8,9];



var leftIndex = 0;
var rightIndex = Math.ceil((arr.length - 1) / 2); //5



while (leftIndex + 1 != rightIndex){

    // if left > right then change left
    if (arr[leftIndex] > arr[rightIndex]){
        rightIndex = leftIndex + Math.ceil((rightIndex - leftIndex)/2);   
        console.log("L" + leftIndex);
        console.log("R" + rightIndex);
    };


    // if left < right then change right
    if (arr[leftIndex] < arr[rightIndex]){
        var temp = rightIndex;
        rightIndex = rightIndex + Math.ceil((rightIndex - leftIndex)/2);   
        leftIndex = temp;

        console.log("L" + leftIndex);
        console.log("R" + rightIndex);
    };


}

        console.log("L" + leftIndex);
        console.log("R" + rightIndex);