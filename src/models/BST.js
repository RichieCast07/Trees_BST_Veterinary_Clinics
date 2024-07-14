import { Node } from "./Node.js";

export class BST {
    constructor() {
        this.root = null;
    }

    add(serviceName, servicePrice) {
        const newNode = new Node(serviceName, servicePrice);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.serviceName < node.serviceName) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(serviceName) {
        return this.searchNode(this.root, serviceName);
    }

    searchNode(node, serviceName) {
        if (node === null) {
            return null;
        }
        if (serviceName < node.serviceName) {
            return this.searchNode(node.left, serviceName);
        } else if (serviceName > node.serviceName) {
            return this.searchNode(node.right, serviceName);
        } else {
            return node;
        }
    }

    min() {
        return this.findMinNode(this.root);
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    max() {
        return this.findMaxNode(this.root);
    }

    findMaxNode(node) {
        if (node.right === null) {
            return node;
        } else {
            return this.findMaxNode(node.right);
        }
    }

    inOrder() {
        const result = [];
        this.inOrderTraverse(this.root, result);
        return result;
    }

    inOrderTraverse(node, result) {
        if (node !== null) {
            this.inOrderTraverse(node.left, result);
            result.push(node);
            this.inOrderTraverse(node.right, result);
        }
    }
}

