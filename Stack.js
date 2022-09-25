const Node = require('./Node');

class Stack {
    constructor() {
        this.top = null;
        this.deleteNode = null;
        // this, size = size;
    }
    // isFull(){
    // this.size===
    // }

    isEmpty() {
        if (!this.top) {
            return true;
        } else {
            return false;
        }
    }

    pushNode(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.top = node;
        } else {
            this.top.next = node;
            node.previous = this.top;
            this.top = node;
        }
    };

    popNode() {
        if (this.isEmpty()) {
            return "shack is empty"
        } else {
            this.deleteNode = this.top;
            this.top = this.top.previous;
            this.top.next = null;
            this.deleteNode.previous = null;
        }
    }

    peek() {
        return this.top.value;
    }

}

module.exports = Stack;