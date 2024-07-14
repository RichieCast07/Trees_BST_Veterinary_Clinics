import { BST } from "./BST.js";

export class Model {
    constructor() {
        this.bst = new BST();
    }

    addService(serviceName, servicePrice) {
        this.bst.add(serviceName, servicePrice);
    }

    findService(serviceName) {
        return this.bst.search(serviceName);
    }

    getLowestPriceService() {
        return this.bst.min();
    }

    getHighestPriceService() {
        return this.bst.max();
    }

    getAllServices() {
        return this.bst.inOrder();
    }
}

