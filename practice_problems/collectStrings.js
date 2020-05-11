function collectStrings(obj){
    let newObj = Object.assign({}, obj);
    let arr = [];

    for(let key in newObj){
        if(typeof(newObj[key]) !== 'object'){
            if(typeof(newObj[key]) === 'string'){
               arr = arr.concat(newObj[key]);
           
            }

        } else{
            if(!Array.isArray(newObj[key])){
               arr = arr.concat(collectStrings(newObj[key])); 
                
            }         
        }
    }

    return arr;
}


const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj1); 