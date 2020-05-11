function findUniqueChar(str){
    let strMap = new Map();
    let uniqueValue = "";

    for(let char of str){
      if(strMap.has(char)){
          let temp = strMap.get(char);
          strMap.set(char, temp + 1);
      }
      else{
          strMap.set(char, 1);
      }
    }

    for(let [key, value] of strMap){
        if (value === 1){
            uniqueValue = key;
            break; 
        }
    }

    return uniqueValue;
}

findUniqueChar("racecars");