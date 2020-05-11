function binary(numb){
   let value = Math.floor(numb / 2), remainder = numb % 2;
    let arr = [];
    arr.unshift(remainder);
    
    while(value !== 0){
        remainder = value % 2;
        value = Math.floor(value / 2);
        arr.unshift(remainder);
    }
    
    while((arr.length % 16) !== 0){
        arr.unshift(0);
    }
    
    return arr;
}


binary(2);