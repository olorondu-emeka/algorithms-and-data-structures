 function dfs(node){
        
        if(!node.left && !node.right) return 1;

        let left = 1, right = 1;
        if(node.left) left = left + dfs(node.left);
        if(node.right) right = right + dfs(node.right);
        
        return Math.max(left,right);
    }

function isBalancedNode(root){
        if(!root) return true;
    if(!root.left && !root.right) return true;
    let leftHeight = 0, rightHeight = 0;
    
    if (root.left) leftHeight = leftHeight + dfs(root.left);
    if(root.right) rightHeight =  rightHeight + dfs(root.right);
    
   return Math.abs(leftHeight - rightHeight) <= 1;
    
}


var isBalanced = function(root) {
    // perform BFS and call isBalancedNode for every node
    // if node is unBalanced, return false
    
    if(!root) return true;
    
    let queue = [root];
    while(queue.length){
        let firstNode = queue.shift();
        let validateBalanced = isBalancedNode(firstNode);
        if(!validateBalanced) return false;
        
        if(firstNode.left) queue.push(firstNode.left);
        if(firstNode.right) queue.push(firstNode.right);
    }
    
    return true;
    
};