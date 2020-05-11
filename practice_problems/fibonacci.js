function fib(numb){
   if(numb < 3){
       return 1;
   } 

   return fib(numb -1) + fib(numb - 2);
}

fib(4)
