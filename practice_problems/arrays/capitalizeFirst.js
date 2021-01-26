function capitalizeFirst(arr){
   
   if(arr.length === 1) {
       let str = arr[0];
       str = str.replace(str[0], str[0].toUpperCase());
       return [str];
   };
   return capitalizeFirst(arr.slice(0,1)).concat(capitalizeFirst(arr.slice(1)));
    
}

capitalizeFirst(['car', 'taco', 'banana']);