class Node{
    constructor(data){
        this.data = data;
        this.previous = null;
        this.next = null;
    }

}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            let tempTail = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            newNode.previous = tempTail;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;

        let tempTail = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }

        this.tail = this.tail.previous;
        this.tail.next = null;
        tempTail.previous = null;

        this.length--;
        return tempTail;
    }

    shift(){
        if(!this.head) return undefined;
          let formerHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
         
           this.head = this.head.next;
           this.head.previous = null;
           formerHead.next = null; 
        }

        

        this.length--;
        return formerHead;
    }

    unshift(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            let tempHead = this.head;
            this.head.previous = newNode;
            this.head = newNode;
            this.head.next = tempHead;
        }

        this.length++;
        return this;
    }

   get(index){
       if(!this.head) return undefined;
       if(index < 0 || index >= this.length) return undefined;
       
       let middle = this.length / 2;
       let counter = index <= middle ? 0 : this.length - 1;
      
       let current = this.head;
       
       if(index <= middle){
           while(counter < index){
           current = current.next;
           counter++;
          }


       }
       else{
           current = this.tail;

           while(counter > index){
             current = current.previous;
             counter--;  
           }

           console.log('current', current);
       }
       

       return current;
   }

   set(index, value){
       let node = this.get(index);
       if(node === undefined) return false;

       node.data = value;
       return true;
   }

   insert(index, value){
      if(index < 0 || index > this.length) return false;

      let newNode = new Node(value);
      if(index === 0){
        return !!this.unshift(value);
      }else if(index === this.length){
        return !!this.push(value);
      } else{
          let formerNode = this.get(index);
          newNode.next = formerNode;
          newNode.previous = formerNode.previous;
          formerNode.previous.next = newNode;
    //       newNode.previous.next = newNode;
          formerNode.previous = newNode;
      }



      this.length++;
      return true; 
   }

   remove(index){
      if(index < 0 || index >= this.length) return false;

      let removedNode = this.get(index);
      if(index === 0){
          return this.shift(index)
      } 
       if(index === this.length - 1){
          return this.pop();
      } 
          removedNode.previous.next = removedNode.next;
          removedNode.next.previous = removedNode.previous;

          removedNode.previous = null;
          removedNode.next = null; 
      
          this.length--;
          return removedNode; 
   }



}



let theList = new DoublyLinkedList();
theList.push(1);
theList.push(2);
theList.push(3);
theList.push(4);
theList.push(5);

