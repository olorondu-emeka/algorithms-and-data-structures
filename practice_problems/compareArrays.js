function compareArrays(arr1, arr2, sum){
    let complementSet = new Set();
//     let secondSet = new Set();

    // prepare complement set
    for(let i = 0; i < arr1.length; i++){
        complementSet.add(sum - arr1[i]);
    }

    // compare arr2 with complement set
    for(let j = 0; j < arr2.length; j++){
        if(complementSet.has(arr2[j])) return true;
    }

    return false;
}


compareArrays([3,1,8], [8,0,10], 9);