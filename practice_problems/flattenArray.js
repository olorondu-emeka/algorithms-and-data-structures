function flatten(arr){
    let newArray = [];
    
    for(let item of arr){
        if(!Array.isArray(item)){
            newArray.push(item);
        } else{
            newArray = newArray.concat(flatten(item));
        }
    }

    return newArray;
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])