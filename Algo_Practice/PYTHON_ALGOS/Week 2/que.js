class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
    }

    // remove and return the front value from the queue
    dequeue() {
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
    }

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
    }

    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }

}