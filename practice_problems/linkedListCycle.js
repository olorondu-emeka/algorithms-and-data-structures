var hasCycle = function(head) {
    if(!head) return false;
    if(!head.next) return false;
    
   let cloneHead = head;
    let map = {};
    
    
    //check if tail is same with any node
    while(cloneHead.next){
        
        if(map[cloneHead.val] !== undefined){
            
            if(map[cloneHead.val].next.val === cloneHead.next.val) return true;
            
        }
        map[cloneHead.val] = cloneHead;
        cloneHead = cloneHead.next;
    }
    
    return false;
    
};