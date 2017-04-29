const util = require('util')

var linkedList = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null } } } } }

function insertNode(list, val){

    var currentNode = list;

    while (currentNode.next.value !== val){
        currentNode = currentNode.next;
    }

    var node2Insert = {value: 99, next: null}

    node2Insert.next = currentNode.next;

    currentNode.next = node2Insert

    return list;

}


var answer = insertNode(linkedList, 3)

console.log(util.inspect(answer, false, null))
