const util = require('util')

var linkedList = { value: 1,next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null } } } } }

var currentNode = linkedList;

var arr = []

// put values into arr
while (currentNode !== null){
    arr.push(currentNode.value)
    currentNode = currentNode.next;
}

//rever arr
arr.reverse()

//put back to linkedList2
var linkedList2 = {};
var currentNode2 = linkedList2;
for (var i = 0; i < arr.length; i++){
    currentNode2.next = {value: arr[i], next: null}
    currentNode2 = currentNode2.next;
}

console.log(util.inspect(linkedList2, false, null))
