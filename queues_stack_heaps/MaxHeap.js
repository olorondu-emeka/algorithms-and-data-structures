class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    bubbleUp(){
       let index = this.values.length - 1;
        let parentIndex = Math.floor( (index - 1)/2 );
        while(index > 0 ){
            parentIndex = Math.floor( (index - 1)/2 ); 

            if(this.values[index] <= this.values[parentIndex]) break;
            
            if(this.values[index] > this.values[parentIndex]){
                // swap
                let temp = this.values[parentIndex];
                this.values[parentIndex] = this.values[index];
                this.values[index] = temp;  
                index = parentIndex;
            }
        } // end while loop
    }

    insert(value){
        this.values.push(value);
        if(this.values.length === 1) return this.values;

        // bubble up the newly added value to its correct position
        this.bubbleUp();
        return this.values;
       
    }
    
    bubbleDown(){
         let elementIndex = 0,
            firstIndex = (2 * elementIndex) + 1,
            secondIndex = (2 * elementIndex) + 2,
            maxChildIndex;

            while(secondIndex < this.values.length || firstIndex < this.values.length){
                // record a maxChildIndex
                // compare element at maxChild Index with initial root
                // if maxChild index > element, then swap
                // set elementIndex to be the swapped index
                
                // ensure that secondIndex & firstIndex are valid
                if( !!(this.values[secondIndex] && this.values[firstIndex]) ){
                    maxChildIndex = this.values[firstIndex] > this.values[secondIndex] ?
                                firstIndex : secondIndex;
                } else{
                    maxChildIndex = firstIndex;
                }

                // compare element a maxChildIndex with element at elementIndex
                if(this.values[maxChildIndex] > this.values[elementIndex]){
                    // swap
                    let temp = this.values[maxChildIndex];
                    this.values[maxChildIndex] = this.values[elementIndex];
                    this.values[elementIndex] = temp;
                    
                    // recompute values
                    elementIndex = maxChildIndex;
                    firstIndex = (2 * elementIndex) + 1;
                    secondIndex = (2 * elementIndex) + 2;

                } else{ break; }

            } // end while loop
    }

    extractMax(){
        // 1. switch the first element and the last element of the values array
        //2. pop the new last element from the array and save in a variable
        //3. bubble down the first element to its correct position

        if(this.values.length === 0) return null;
        if(this.values.length === 1) return this.values.pop(); 
        
        // swap first element and last element
        let root = this.values[0];
        let lastIndex = this.values.length - 1;
        this.values[0] = this.values[lastIndex];
        this.values[lastIndex] = root;

        // remove last element
        this.values.pop();

        // bubble down
       this.bubbleDown();
       return root;
    }
}



// examples
let maxheap = new MaxBinaryHeap();
maxheap.insert(41);
maxheap.insert(39);
maxheap.insert(33);
maxheap.insert(18);
maxheap.insert(27);
maxheap.insert(12);

//array before: [41,39,33,18,27,12,55]
maxheap.insert(55);

// array after: [55, 39, 41, 18, 27, 12, 33]