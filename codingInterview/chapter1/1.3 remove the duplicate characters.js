// Design an algorithm and write code to remove the duplicate characters in a string without using any additional bu er

function removeDuplicates(string){
    var mySet = new Set(string.split(''))
    return [...mySet].join('')
}


var answer = removeDuplicates("hello world")

console.log(answer)