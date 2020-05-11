function selectionSort(arr){
   
    let tracker = 0;
    for(let i = 0; i < arr.length; i++){
         let minIndex = i;
        for(var j = i+1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
            
            //console.log(minIndex);
            //console.log(tracker);
            //console.log(i, j);
        }
        
        console.log(j);
        
        // swap item at minIndex with item at index 0
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

      
    } 

    return arr;
}


selectionSort([2,1,4,3,5]);