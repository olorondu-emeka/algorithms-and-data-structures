function capitalizeWords(arr){
   if(arr.length === 1){
       arr[0] = arr[0].toUpperCase();
       return arr;
   } 

   return capitalizeWords(arr.slice(0,1)).concat(capitalizeWords(arr.slice(1)));
}

capitalizeWords(['car', 'goat', 'dog']);