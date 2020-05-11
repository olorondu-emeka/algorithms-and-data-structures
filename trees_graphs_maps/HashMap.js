class Hashmap{
    constructor(size=53){
        this.values = new Array(size);
    }

    _hash(key){
        // takes a key and returns an index
        let PRIME_NO = 31;
        let total = 0;

        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            total = ((total * PRIME_NO) + (char.charCodeAt(0) - 96)) % this.values.length; 
        }

        return total;
    }

    set(key, value){
        let item = [key, value];
        let index = this._hash(key);

        if(!this.values[index]){
            this.values[index] = [];
        }
        
        this.values[index].push(item);
        return this.values;

    }

    get(key){
        let index = this._hash(key);
        let itemsArray = this.values[index];
        let found = false, finalItem;
        

        if(itemsArray){
            for(let item of itemsArray){
                if(item[0] === key){
                   finalItem = item[1];
                   found = true;
                   break; 
                }
            }
        } 
        
      if(!found){
            finalItem = undefined;
        }

        return finalItem;

    }
}

let map = new Hashmap();
map.set("laptop", 12);
map.set("phones", 4);
