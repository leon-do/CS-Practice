const util = require('util')

var linkedList = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null } } } } }

var newList = null;

while (linkedList != null){
    // define
    var currentNode = linkedList;

    // shift
    linkedList = linkedList.next;

    // point
    currentNode.next = newList;

    //update
    newList = currentNode;
}

console.log(util.inspect(newList, false, null))

