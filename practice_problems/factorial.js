function factorial(numb){
   if (numb === 0){
       return 1;
   } 

   let temp = numb - 1;

   return numb * factorial(temp);
}

factorial(4)