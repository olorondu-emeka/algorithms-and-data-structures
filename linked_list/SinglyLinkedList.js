class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
} 


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data){
        let node = new Node(data);

        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        
        this.tail = newTail;

        if(this.length === 1){
            this.head = null;
        }
        newTail.next = null;
        this.length--;
        return current;

    }

    shift(){ 
        if(!this.head) return undefined;
        let initialHead = this.head;
        this.head = initialHead.next;
        this.length--;
        return initialHead;
    }

    unshift(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
          let initialHead = this.head;
          this.head = newNode;
          this.head.next = initialHead;  
        }
       this.length++; 
       return this;
    }

    get(index){
        let counter = 0;

        if(index < 0 || index >= this.length) return undefined;
        
        let current = this.head;
        while(counter < index){
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, value){
        let current = this.get(index);

        if(current === undefined) return false;

        current.data = value;
        return true;
    }

    insert(index, value){
       let newNode = new Node(value);
       let counter = 0;

       if(index < 0 || index >= this.length) return false;
       let current = this.head;
       let previous = current;

       while(counter < index){
           previous = current;
           current = current.next;
           counter++;
       } 

       previous.next = newNode;
       newNode.next = current;
       this.length++;
       return true;
    }

    remove(index){
        let counter = 0;

       if(index < 0 || index >= this.length) return false;
       let current = this.head;
       let previous = current;

       while(counter < index){
           previous = current;
           current = current.next;
           counter++;
       } 

       previous.next = current.next; 
       if(this.length === 1){
           this.head = null;
           this.tail = null;
       }  
       this.length--;
       return current; 
    }

    reverse(){
       let current = this.head;
       let tempTail = this.tail;
       let previous = current;

       this.tail = current;
       this.head = tempTail;

       let counter = 1;

       while(counter < this.length - 1){
           previous = current;
           current = current.next;
           current.next = previous;

           counter++
       }

       
        
    }

    
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
