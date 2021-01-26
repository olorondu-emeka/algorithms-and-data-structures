function reverse(str){
  console.log(1);
  if (str.length === 0){
      return "";
  }  

  return str.split('')[str.length - 1] + reverse(str.split('').slice(0, str.length - 1).join(''));
}

reverse("hello");