class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    // Inserts a value into the tree
    // positioning based on it's value.
    add(value) {
        let newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        // check if root is null (empty)
        else {
            let runner = this.root;
            while (runner != null) {

                // console.log(newNode);
                if (newNode.value > runner.value) {
                    if (runner.right == null) {
                        runner.right = newNode;
                    }
                    else {
                        runner = runner.right;
                    }
                }
                else if (newNode.value < runner.value) {
                    if (runner.left == null) {
                        runner.left = newNode
                    }
                    else {
                        runner = runner.left;
                    }
                }
            }
        }
    }
    //  if so root is new node, exit
    findMin() {
        // Find min value
        runner = this.root
        while (runner.left == null) {
            runner = runner.left;
        }
        console.log(runner.value);
        return this;
    }

    findMax() {
        //Find max value
        runner = this.root
        while (runner.right == null) {
            runner = runner.right;
        }
        console.log(runner.value);
        return this;
    }

    // if not null
    // make a runner point to root
    // check val with the runner
    // greater? -- check if this.right is null
    //          if not runner = runner.right
    //.... more pseudo code! How do you know when you can add it in?


    printTree(node) {
        console.log("Current node = ", node.value);
        if (node.left != null) {
            console.log("Left node of ", node.value, " = " + node.left.value);
            this.printTree(node.left);
        }
        if (node.right != null) {
            console.log("Right node of ", node.value, " = " + node.right.value);
            this.printTree(node.right);
        }

    }

    size(node) {
        if (node == null) return 0;
        else return (this.size(node.left) + 1 + this.size(node.right));
    }

    contains(value) {
        //given a value find whether or not it exists in your BST
        if (this.root == null) return false;
        if (this.root.value == value) return true;
        else {
            var runner = this.root;
            while (runner != null) {
                if (value == runner.value) {
                    return true;
                }
                else {
                    if (value < runner.value) {
                        runner = runner.left;
                    }
                    else {
                        runner = runner.right
                    }
                }
            }
            return false;
        }
    }
    // Find the Max Height of a BST
    height(rootNode) {
        if (rootNode == null) {
            return 0;
        }
        else {
            var leftHeight = this.height(rootNode.left)
            var rightHeight = this.height(rootNode.right)
            if (leftHeight > rightHeight) {
                return leftHeight + 1
            }
            else {
                return rightHeight + 1
            }
        }
    }

    isBalanced(rootNode) {
        if (rootNode == null) {
            return true
        }
        var leftHeight = this.height(rootNode.left)
        var rightHeight = this.height(rootNode.right)
        // .abs is using an absolute value. All numbers in a positive value.
        if (Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(rootNode.left) && this.isBalanced(rootNode.right)) {
            return true
        }
        else {
            return false
        }
    }

    remove(node = this.root, value) {
        if (node == null) {
            return
        }
        else if (value < node.value) {
            node.left = this.remove(node.left, value)
        }
        else if (value > node.value) {
            node.right = this.remove(node.right, value)
        }
        else {
            // Case 1: Deleting with ONE or NO child
            if (node.left == null) {
                var temp = node.right
                node = null
                console.log("Deletion from node.left==null")
                return temp
            }
            else if (node.right == null) {
                var temp = node.left
                node = null
                console.log("Deletion from node.right==null")
                return temp
            }
            // Case 2: Deleting with teo children (Finding MIN of Right Subtree)
            else {
                console.log("Two CHILD remove")
                var temp = this.findMin(node.right)
                node.value = temp.value
                node.right = this.remove(node.right, temp.value)
            }
        }
    }

}


let newBST = new BST();
newBST.add(35);
newBST.add(77);
newBST.add(14);
newBST.add(7);
newBST.add(6);
newBST.add(5);
newBST.add(4);
newBST.add(3);
newBST.printTree(newBST.root);
newBST.findMin(newBST.root);
newBST.findMax(newBST.root);
newBST.size(newBST.root)
newBST.height(newBST.root)










console.log(newBST.size(newBST.root));
console.log(newBST.contains(35));
console.log(newBST.height(newBST.root));
console.log(newBST.isBalanced(newBST.root));