// Find the longest palindromic sub-string

function longestPalendrome(string){
    var originalArray = string.split('')

    // arr has a # in between each letter arr= a#b#c#d...
    var arr = [];
    // put # in between every letter a#b#c#...
    for (var i = 0; i < string.length; i++){
        arr.push(originalArray[i]);
        arr.push("#")
    }

    var neighbor = 0;
    var palendromeLength = 0;
    var palendromeCenter = 0;

    for (var center = 0; center < arr.length; center++){
        var neighbor = 1
        while (arr[center + neighbor] === arr[center - neighbor]){
            neighbor++;
        }

        //store max length & it's location
        if (neighbor > palendromeLength){
            palendromeLength = neighbor;
            palendromeCenter = center;
        }
    }

    var answer = arr.splice((palendromeCenter - palendromeLength + 1), (palendromeCenter + palendromeLength - 1))

    console.log(answer)

    /*
    1234554321
    arr   [ '1', '#', '2', '#', '3', '#', '4', '#', '5', '#', '5', '#', '4', '#', '3', '#', '2', '#', '1', '#' ]
    index                                                 9
    */

}


longestPalendrome("61234321512")
//abcdcbazzz