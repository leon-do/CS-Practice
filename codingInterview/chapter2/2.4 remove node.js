const util = require('util')

var linkedList = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null } } } } }


function removeNode(list, val){
    var currentNode = list;

    while (currentNode.next.value != val){
        currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;

    return list;
}


var answer = removeNode(linkedList, 3);

console.log(util.inspect(answer, false, null))
