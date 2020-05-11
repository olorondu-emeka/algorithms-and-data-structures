function findLongestSubstring(str){
    if (str.length === 0) return 0;
    let maxLength = 0, window = '', snapshot = '', snapshotChanged = false; 

    for(let i = 0; i < str.length; i++){
        if(snapshot.includes(str[i]) || window.includes(str[i]) ){
            if(snapshot.length === 0){
                snapshot += window;
                window = '';
                snapshotChanged = true;
            }
        } else{
            window += str[i];
            maxLength = (window.length > maxLength) ? window.length : maxLength;

            if(snapshotChanged){
                snapshot = '';
                snapshotChanged = false;
            }
        }
    }
    return maxLength;
}