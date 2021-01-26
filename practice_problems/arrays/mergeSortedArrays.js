function mergeSortedArrays(arr1, arr2){
    let result = [], i = 0, j = 0;

    while( (i < arr1.length) && (j < arr2.length)){
        if(arr1[i] <= arr2[j]){
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

mergeSortedArrays([1,2,4,4,7], [3,5,6,8,9]);