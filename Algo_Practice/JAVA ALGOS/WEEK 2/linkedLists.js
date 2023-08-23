class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(valueInput) {
        if (this.head == null) {
            this.head = new Node(valueInput)
        } else {
            let runner = this.head
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = new Node(valueInput)
        }
        return this
    }


    // given a value, print whether the list contains that value
    contains(value) {
        if (!this.head) {
            return false;
        }
        var runner = this.head;
        while (runner) {
            if (runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // print out the SLL
    display() {
        let result = "";
        let runner = this.head;
        while (runner != null) {
            result += `${runner.value}--> `;
            runner = runner.next;
        }
        console.log(result);
    }



    removeFromFront() {
        if (this.head == null) {
            return this
        }
        else {
            this.head = this.head.next
            return this
        }
    }

    minToFront() {
        var minNode = this.head
        var runner = this.head
        var lateRunner = this.head

        while (runner.next != null) {
            if (runner.next.value < minNode.value) {
                minNode = runner.next
                lateRunner = runner
            }
            runner = runner.next
        }

        lateRunner.next = minNode.next
        minNode.next = this.head
        this.head = minNode
    }

    maxToBack() {
        var maxNode = this.head
        var runner = this.head
        var lateRunner = this.head

        while (runner.next != null) {
            if (runner.next.value > maxNode.value) {
                maxNode = runner.next
                lateRunner = runner
            }
            runner = runner.next
        }

        lateRunner.next = maxNode.next
        runner.next = maxNode
        maxNode.next = null
    }

    maxToBackSvet() {
        console.log('inside minToFront')
        let runner = this.head
        let max = this.head
        let bm
        let am
        let last
        let beforeLast
        while (runner.next) {
            if (runner.next.value > max.value) {
                max = runner.next
                bm = runner
                am = runner.next.next
                console.log('maximum ; ', max)
                console.log('before ', bm, 'after ', am, 'max ', max)
            }
            if (runner.next.next == null) {
                beforeLast = runner
                console.log(beforeLast)
                last = runner.next
            }
            runner = runner.next
            // }
            // last.next = max
            // beforeLast.next = am
            return this
        }
    }

    reverseList() {
        let arr = [];
        let runner = this.head;
        if (this.head == null) {
            return "List does not have values"
        }
        while (runner != null) {
            arr.unshift(runner.value)
            runner = runner.next
        }
        runner = this.head
        for (let i = 0; i < arr.length; i++) {
            this.addToBack(arr[i]);
            this.removeFromFront();
        }
        return this;
    }

    reverse() {
        let runner = this.head;
        while (runner != null) {
            [runner.prev, runner.next] = [runner.next, runner.prev];
            runner = runner.prev;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }

    recurseReverse(runner = this.head) {
        if (runner === null) {
            [this.head, this.tail] = [this.tail, this.head];
            return this;
        }
        [runner.prev, runner.next] = [runner.next, runner.prev];
        return this.recurseReverse(runner.prev);
    }




    reverseRecurseReverse(runner = this.tail) {
        if (runner === null) {
            [this.head, this.tail] = [this.tail, this.head];
            return this;
        }
        [runner.next, runner.prev] = [runner.prev, runner.next];
        return this.reverseRecurseReverse(runner.next);
    }

    reverseSSL() {
        if(this.head == null || this.head.next == null) return this;
        let prev = this.head;
        let mid = this.head.next;
        let front = this.head.next.next;

        this.head.next = null;
        while(mid != null){
            mid.next = prev;    // flips the arrow          
            prev = mid;
            mid = front;    // last: this would be the old back
            if(front !== null) front = front.next; // last time: this will make front == null    
        }

        this.head = prev;
        return this;
    }
    reverseList() {
        var runner = this.head
        var previousNode = null
    
        while(runner != null){
            var temp = runner.next
            runner.next = previousNode
            previousNode = runner
            runner = temp
            
        }
        this.head = previousNode
        }
}


sl1 = new SLL()
sl1.addToFront(5).addToFront(8).addToFront(12).addToFront(21).addToFront(3).display();
sl1.reverseList().display();
// sl1.addToBack(5).addToBack(8).addToBack(12).display();
// sl1.minToFront();
// sl1.display();
// sl1.maxToBack();
// sl1.display();



    
    reverse = () => {
        if(this.head == null || this.head.next == null)
            return this;
        var backRunner = this.head;
        var runner = this.head.next;
        var forwardRunner = this.head.next;
        backRunner.next = null;
        while (runner != null){
            forwardRunner = forwardRunner.next;
            runner.next = backRunner;
            backRunner = runner;
            runner = forwardRunner;
        }
        this.head = backRunner;
        return;
    }

    reverseList() {
        var runner = this.head;
        var previous = null;
        var swap = this.head;

        while (runner != null) {
            swap = runner.next;
            runner.next = previous;
            previous = runner;
            runner = swap;
        }
        this.head = previous;

        console.log("head");
        console.log(this.head)
        return this
    }
