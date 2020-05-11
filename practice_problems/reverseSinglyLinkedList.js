function reverse(node){
    if(!node.next) return { head: node, tail: node };
    
    let tempObj = {...reverse(node.next)};
    node.next = null;
    tempObj.tail.next = node;
    tempObj.tail = node;
    
    return tempObj;
}

var reverseList = function(head) {
   if(!head) return null;
    if(!head.next) return head;
    
    let list = reverse(head);
    
    return list.head;
};