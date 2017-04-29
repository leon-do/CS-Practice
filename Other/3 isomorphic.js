/*
For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
string A to every char of string B.

`paper` and `title` would return true.
`egg` and `sad` would return false.
`dgg` and `add` would return true.
*/


var arr1 = "kick".split('')
var arr2 = "side".split('')



function isomorphic(arr1, arr2){

    var set1 = new Set();
    var set2 = new Set();

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++){
        set1.add(arr1[i]);
        set2.add(arr2[i]);

        if (set1.size !== set2.size){
            return false;
        } 
    }

    return true;

}




var answer = isomorphic(arr1, arr2)

console.log(answer)