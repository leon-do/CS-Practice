const util = require('util')

var linkedList = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null } } } } }

//starting point
var newList = null;

while (linkedList !== null) {

    // current location
    var currentNode = linkedList;          
    
    // next location
    linkedList = linkedList.next;

    // 'append' new list to currentNode
    currentNode.next = newList;

    // update list
    newList = currentNode;     
}

console.log(util.inspect(newList, false, null))

