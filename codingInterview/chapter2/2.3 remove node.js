var linkedList = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null } } } } }

function removeNode(link, n) {
    // set a current location / reference
    let current = link;
    // checks next value, if it's not n then it moves through link
    while (current.next.value != n) {
        current = current.next
    }
    // once next value == n, then remove it
    current.next = current.next.next;
    // return new link
    return link;
}


var answer = removeNode(linkedList, 3);

console.log(util.inspect(answer, false, null))
