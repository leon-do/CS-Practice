// Write a method to decide if two strings are anagrams or not.

function anagram(string1, string2){
    var arr1 = [...string1].sort().join('');
    var arr2 = [...string2].sort().join('');
    
    return arr1 === arr2
}


var answer = anagram("hello","lleoh")

console.log(answer)