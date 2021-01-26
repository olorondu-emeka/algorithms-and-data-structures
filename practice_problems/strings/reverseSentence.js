function reverseSentence(sentence){
   let arr = sentence.split(' ');
   let reversed = "";

   for(let i = 0; i < arr.length; i++){

      arr[i] = arr[i].split('').reverse().join(''); 
      if(i === arr.length - 1){
          reversed += arr[i];
      }
      else{
          reversed += arr[i] + " ";
      }
       
   }
    
    
    return reversed;
}

reverseSentence("Hello world");