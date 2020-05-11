function reverse2(str){
    if(str.length === 1) return str;
    return reverse2(str.slice(1)) + str[0];
}

reverse2('make');