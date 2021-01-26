

function isSubsequence_slow(str1, str2){
    if(str1.length > str2.length) return false;

    let prev = -1;
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str2[j] === str1[i]){
                if(j < prev){
                    console.log('index', i, prev);
                    return false;
                }
                prev = j;
                break;
            }
        }
    }

    return true;

}

function isSubsequence_fast(str1, str2){
   if(str1.length > str2.length) return false;

   let map1 = new Set();
   let map2 = {}, visited = {};
   let prev = -1;

   for(let char of str1){
       map1[char] = true;
   } 

   for(let i = 0; i < str2.length; i++){
       if(map1[str2[i]] && !visited[str2[i]]){
           map2[str2[i]] = i;
           visited[str2[i]] = true;
       }
   }

   console.log(map2);

   for(let key in map1){
       if(map2[key] < prev) return false;
       prev = map2[key];
   }

   return true;
}