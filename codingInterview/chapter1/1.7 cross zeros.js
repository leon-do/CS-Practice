/* 

Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.


11111
10111
11111
11111

will return

10111
00000
10111
10111


*/
var matrix = [ [1,1,1,1,1], [1,1,1,0,1],  [1,1,1,1,1], [1,1,1,1,1] ]

//find location of 0
var rowLocation;
var colLocation;

//find row and column of 0
for (let row = 0; row < matrix.length; row++){
    if (matrix[row].indexOf(0) !== -1){
        colLocation = matrix[row].indexOf(0);
        rowLocation = row;
    }
}

//rebuild the matrix
var answer = []
for (let row = 0; row < matrix.length; row++){
    answer[row] = []; 
    for (let col = 0; col < matrix[0].length; col++){
        if (row === rowLocation || col === colLocation){
            answer[row].push(0)
        } else {
            answer[row].push(1)            
        }
    }
}

console.log(answer)
