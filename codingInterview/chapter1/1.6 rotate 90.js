// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

/*

012
345
678

rotate that to

630
741
852

6 3 0 7 4 1 8 5 2
*/

var N = 3;
var arr = [1,2,3,4,5,6,7,8,9]
var firstColumnNum = arr.length;

//loop row
for (var i = 0; i < N; i++){
    //loop column
    for (var j = N; j <= arr.length; j = j + N){
        console.log(firstColumnNum - j)
    }  
    firstColumnNum ++;
}

