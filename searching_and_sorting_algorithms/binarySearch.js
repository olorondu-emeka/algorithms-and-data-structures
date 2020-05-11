function binarySearch(arr, value){
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.round((left + right) / 2);

    while (left < right){
        
        let tracker = arr[middle];

        if(value === tracker){
            return middle;
        }

        if(value < tracker){
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }

        middle = Math.round((left + right) / 2);
    }




    if(left === right && arr[middle] === value){
        return middle;
    }

    return -1;
}






binarySearch([1,2,3,4,5,6,7,8,9], 8);