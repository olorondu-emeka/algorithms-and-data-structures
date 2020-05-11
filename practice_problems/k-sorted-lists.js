/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function listToArray(list){
   let arr = [], current = list; 
    
    while(current){
        arr.push(current);
        current = current.next;
    }
    
    return arr;
}

function mergeSortedArrays(arr1, arr2){
    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1;
    
   let i = 0, j = 0, result = [];
    
    
    while( (i < arr1.length) && (j < arr2.length) ){
        if(arr1[i].val <= arr2[j].val){
            result.push(arr1[i]);
            i++;
        } else{
            result.push(arr2[j]);
            j++;
        }
    }
    
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}


var mergeKLists = function(lists) {
    if(lists.includes(null)){
        lists = lists.filter(node => node !== null);
    }
    if(lists.length === 0 ) return null;
    
    //3. convert the merged array to a singly linked list
    
    
  let map = [], results = [];
    let firstNode;
    
    //1. convert lists to key-value pairs of arrays
    for(let i = 0; i < lists.length; i++){
        map.push(listToArray(lists[i]));
    }
    
    
    //2. merge sorted arrays together into a singular sorted array
    while(map.length > 0){
        
        firstNode = map.shift();
        results = mergeSortedArrays(results, firstNode);
        
    }
        
    //form objects
    let mainHead = results.shift();
    let finalObj = { head: mainHead, tail: mainHead };
    let current = mainHead;
    
    while(results.length > 0){
        current = results.shift();
        finalObj.tail.next = current;
        finalObj.tail = current;
    }
    
    return finalObj.head;
    
    
    
};