class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(value){
        let newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }
    addFront(value){
        let newNode = new Node(value);
        if(this.tail == null){
            this.tail = newNode;
        } else {
            newNode.next = this.head;   
            this.head.prev = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    }
    
    pop(){
        if(this.tail == null) return;
        let lastNode = this.tail;
        this.tail = lastNode.prev;
        this.tail.next = null;
        this.length --;
        return lastNode.value;

    }
    remFront(){
        if(this.head == null) return;
        let newHead = this.head.next;
        let oldHeadVal = this.head.value;
        this.head.next = null;
        newHead.prev = null;
        this.head = newHead;
        this.length--;
        return oldHeadVal;
    }
    
    size(){
        return this.length;
    }
    print(){
        let result = "";
        let runner = this.head;
        while(runner != null){
            result += `${runner.value} 👉 ⇶✨ `; 
            runner = runner.next;
        }
        console.log(result.slice(0, result.length - 6));
    }
    printBackwards(){
        let result = "";
        let runner = this.tail;
        while(runner != null){
            result += `${runner.value} ✨⬱ 👈 `;
            runner = runner.prev;
        }

        console.log(result.slice(0, result.length - 6));
    }

    reverse() {
        if(!this.head) return undefined;

        let node = this.head;

        this.head =this.tail;

        this.tail = node;

        let counter = 0;
        let prev = null;
        let next;

        while(counter < this.length) {

            next = node.next;

            node.prev = next;

            node.next = prev;

            prev = node;

            node = next;
            
            counter++
        }
        return this;
    }

    
}

dl1 = new DLL();
dl1.addFront(3).addFront(5).addFront(8).addFront(17);
dl1.print();
dl1.reverse();
dl1.print();


class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DLL{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    addToFront(value) {
        var node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++
        return this
    }

    addtoBack(value) {
        var node = new Node(value);
        if(!this.tail){
            this.tail = node;
            this.head = node;
        }
        else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this
    }

    removeFromFront(){
        if(!this.head){
            console.log("List is empty!")
            return this
        }
        this.head = this.head.next
        this.head.prev.next = null
        this.head.prev = null
        this.length--
        return this
    }
    
    removeFromBack(){
        if(!this.tail){
            console.log("List is empty!")
            return this
        }
        this.tail = this.tail.prev
        this.tail.next.prev = null
        this.tail.next = null
        this.length--
        return this
    }

    printList() {
        var runner = this.head
        while(runner){
            console.log(runner.value);
            runner = runner.next
        }
    }
    printListBackwards(){
        var runner = this.tail
        while(runner){
            console.log(runner.value);
            runner = runner.prev
        }
    }
}


reverse() {
    let runner = this.tail;
    while(runner != null){
        let temp = runner.next;
        runner.next = runner.previous;
        runner.previous = temp;
        runner = runner.next;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail=temp;
}

recurseReverse(runner = this.head) {
    if(runner != null){
        let nextJump = runner.next;
        let temp = runner.next;
        runner.next = runner.previous;
        runner.previous = temp;
        this.recurseReverse(nextJump)
    } else {
        let temp = this.head;
        this.head = this.tail;
        this.tail=temp;
        return this;
    }
}