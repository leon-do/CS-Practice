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








function commonAncestorBT(node, n1, n2){
   if(!node) return;
   var val = node.value;
   if(n1 == val || n2 ==val){
     return node;
   }
   var left = commonAncestorBT(node.left, n1, n2);
   var right = commonAncestorBT(node.right, n1, n2);
   if(left && right){
     return node;
  }
  return (left) ? left : right;
}


console.log(commonAncestorBT(tree, 1,5))






