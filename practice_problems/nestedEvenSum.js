function nestedEvenSum(obj){
    let sum = 0;

    for(let key in obj){
        //check whether key is an object or not
        if(typeof(obj[key]) !== 'object'){
            // it's not an object
            // now, check if it's an integer or not
            if(typeof(obj[key]) === 'number'){
                // check if it's even or odd
                if(obj[key] % 2 === 0){
                    // add even number to the sum
                    sum += obj[key];
                }
            } 
        } else{
            // check if it's an array or an object
            if(!Array.isArray(obj[key])){
               sum += nestedEvenSum(obj[key]); 
            }
            
        }
    }

    return sum;
}




var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10