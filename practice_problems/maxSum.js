function maxSum(arr, range){
    if(arr.length < range) return null;
    let window = 0, max;

    // initialize window value
    for(let i = 0; i < range; i++){
        window += arr[i];
        console.log('window', window);
    }

    max = window;
    for(let i = range; i < arr.length; i++){
        window = window - arr[i - range] + arr[i];
        console.log(window);
        if(window > max){
            max = window;
        }
    }

    return max;
}
