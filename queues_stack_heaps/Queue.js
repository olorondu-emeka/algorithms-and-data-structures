// Queue implementation using a linked list
// the queue is a First In First Out (FIFO) data structure

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail= null;
        this.length = 0;
    }

    enqueue(value){
        // adds a value to the end of a queue
        // similar to push() method of an array
//         REMEMBER EDGE CASES!
           let newNode = new Node(value);
           if(!this.head){
              this.head = newNode;
              this.tail = newNode; 
           } else{
              this.tail.next = newNode;
              this.tail = newNode; 
           }

           this.length++;
           return this;

    }

    dequeue(){
        // removes the first value from a queue
        // similar to the shift() method of an array

        if(!this.head) return undefined;

        let removedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = this.head.next;
            removedNode.next = null;
        }
        
        this.length--;
        return removedNode;
    }
}


// examples
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);