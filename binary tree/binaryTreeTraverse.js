var tree = { value: 10,
  right: null,
  left: 
   { value: 5,
     right: { value: 6, right: null, left: null },
     left: { value: 1, right: null, left: null } } }


function inorder(node){
   if(node != null){
      inorder(node.left);
      console.log(node.value);
      inorder(node.right);
   }
}


inorder(tree)