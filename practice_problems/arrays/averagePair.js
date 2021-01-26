function averagePair(arr, target){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return false;
  
  let left = 0, right = arr.length - 1;
  let average;
  
  while(left < right){
      average = (arr[left] + arr[right]) / 2;
      if(average === target) return true;
      if(average > target){
          right--;
      } else{
          left++;
      }
  }
  return false;
}

averagePair([1,2,3], 2.5);