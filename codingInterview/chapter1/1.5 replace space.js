// Write a method to replace all spaces in a string with ‘%20’.


function replaceSpace(string){
    var arr = string.split('')
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === " "){
            arr[i] = "%20"
        }
    }
    return arr.join('');
}
var answer = replaceSpace('hello world leon');
console.log(answer)




