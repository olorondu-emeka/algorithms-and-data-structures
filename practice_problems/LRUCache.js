var LRUCache = function(capacity){
    this.cacheItems = new Array(capacity);
    this.cacheKeys = {}; //stores valid cache keys and their indexes in the cacheItems array
    this.stack = []; // for invalidating keys, it contains the keys
    this.stackFull = false;
    this.duplicates = {};
}

LRUCache.prototype.put = function(key,value){
   if(!this.stackFull && (this.stack.length < this.cacheItems.length) ){
       this.cacheKeys[key] = this.stack.length;
       this.cacheItems[this.stack.length] = value;
       this.stack.push(key);

       if(this.stack.length === this.cacheItems.length) this.stackFull = true;
   } else{
       // if key already exists in duplicates, add it to this.duplicates
//       console.log('cache keys', this.cacheKeys[key], key);
       if(this.cacheKeys[key] !== undefined){
//             console.log('hmm');
        this.duplicates[key] = this.cacheKeys[key];
       }

        this.cacheKeys[key] = this.stack.length - 1;
//         console.log('hello',this.duplicates, this.cacheItems, this.cacheKeys);
        let discardedKey;
        if(this.stack.length > 0){
            discardedKey = this.stack.pop();
            console.log('duplicates', this.duplicates);
            if(this.duplicates[discardedKey] !== undefined){
                console.log('discarded', discardedKey);
                this.cacheItems.splice(this.duplicates[discardedKey],1,value);
                console.log(this.cacheItems, this.cacheKeys);
                delete this.duplicates[discardedKey];
                return null;
            } else{
                this.cacheItems.splice(this.cacheKeys[discardedKey],1, value);
                delete this.cacheKeys[discardedKey];
                return null;
            }
            
            
            
        } 

        this.cacheItems.splice(0,1);
        this.cacheItems[0] = value;
        return null;

   }

   
}

LRUCache.prototype.get = function(key){
    let theIndex = this.cacheKeys[key];
   if(theIndex === undefined) return -1;
   return this.cacheItems[theIndex];

}

let cache = new LRUCache( 2 /* capacity */ );

cache.put(2, 1);
cache.put(1, 1);
cache.put(2,3);
cache.put(4,1);

// cache.put(3,3);
// cache.put(4,4);
// cache.get(1);


console.log(cache);
