//create a linked list


const util = require('util')

var head = {value: 1, next: null};


function makeList(node, val){
    if (node.next != null){
        return makeList(node.next, val)
    }
    node.next = {value: val, next: null}
}


makeList(head, 1)
makeList(head, 2)
makeList(head, 3)
makeList(head, 4)


console.log(util.inspect(head, false, null))
