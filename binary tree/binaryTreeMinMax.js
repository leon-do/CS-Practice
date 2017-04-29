var tree = { value: 10,
  right: 
   { value: 12,
     right: 
      { value: 44,
        right: 
         { value: 55,
           right: { value: 90, right: null, left: null },
           left: null },
        left: { value: 23, right: null, left: null } },
     left: null },
  left: 
   { value: 6,
     right: null,
     left: 
      { value: 4,
        right: { value: 5, right: null, left: null },
        left: 
         { value: 2,
           right: { value: 3, right: null, left: null },
           left: { value: 1, right: null, left: null } } } } }




// finds the smallest number by going left

function minNode(node){
   if(!node){
      return 0;
   }
   if(node.left){
     return minNode(node.left)
  }
  return node.value
}

var answer = minNode(tree)

console.log(answer)









