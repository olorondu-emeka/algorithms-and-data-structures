function stringifyNumbers(obj){
    //loop through the object and check if there are ojects or non-objects present
    let newObj = {...obj};
    for(let key in newObj){
        if(typeof(newObj[key]) !== 'object'){
            if(typeof(newObj[key]) === 'number'){
                newObj[key] = newObj[key].toString();
            }

        } else{
            if(!Array.isArray(newObj[key])){
                newObj[key] = stringifyNumbers(newObj[key]);
            }
        }
    }

    return newObj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj);