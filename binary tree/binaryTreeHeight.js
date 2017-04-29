var tree = { value: 10,
  right: { value: 99, right: null, left: null },
  left: 
   { value: 2,
     right: 
      { value: 3,
        right: 
         { value: 4,
           right: 
            { value: 5,
              right: 
               { value: 6,
                 right: 
                  { value: 7,
                    right: 
                     { value: 8,
                       right: { value: 9, right: null, left: null },
                       left: null },
                    left: null },
                 left: null },
              left: null },
           left: null },
        left: null },
     left: { value: 1, right: null, left: null } } }







function height(node){
   if(node == null) return 0;
   var leftHeight = height(node.left);
   var rightHeight = height(node.right);
   return Math.max(leftHeight, rightHeight) + 1;
}

var answer = height(tree);

console.log(answer)

