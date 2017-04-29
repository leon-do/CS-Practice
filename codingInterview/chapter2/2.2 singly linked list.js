// Implement an algorithm to  nd the nth to last element of a singly linked list.

var linkedList = { value: 1,next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null } } } } }
var depth = 0;
var N = 3;
function objectLength(node){
    while (depth === N){
        depth++;
        objectLength(node.next)
    }
    return node;
}

var answer = objectLength(linkedList)

console.log(answer)