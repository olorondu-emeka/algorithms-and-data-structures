// stack implementation with a linked list
// a stack is a Last In First Out (LIFO) data structure

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
//  adds value to the beginning of a stack
//  similar to the unshift() method of an array

        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
//      removes value from the beginning of a stack
//      similar to the shift() method of a stack

        if(!this.head) return undefined;

        let removedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = removedNode.next;
            removedNode.next = null;
        }

        
        this.length--;
        return removedNode;

    }
}


// examples
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);


