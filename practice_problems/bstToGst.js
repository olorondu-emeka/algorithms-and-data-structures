function bstToGst(root) {
   let arr = [];
   let sum = 0; 
    root = (function dfs(node){
        if(!node.right && !node.left){
            arr.push(node.val);
            return node;
        }
        if (node.right){
            node.val += node.val + dfs(node.right).val;
            arr.push(node.val);
        };
        if(node.left){
          if(!node.left.right && !node.left.left){
              node.left.val += node.left.val + node.val;
              arr.push(node.left.val);
              return node.left;
          } else{
              node.left.val += node.left.val + dfs(node.left.right).val;
              arr.push(node.left.val);
          } 
        };
        
        return node;
        
    })(root);
    
    console.log(arr);
    return root;
    
    
};