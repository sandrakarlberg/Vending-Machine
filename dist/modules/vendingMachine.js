"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    products;
    constructor(products) {
        this.products = products;
    }
    // listProducts(): void {
    //   console.log("Available products:");
    //   this.products.forEach((product, index) => {
    //     console.log(
    //       `${index + 1}. ${product.name} is available for ${product.price} kr`
    //     );
    //   });
    // }
    listProducts() {
        return this.products.map((product, index) => `${index + 1}. ${product.name} is available for ${product.price} kr`);
    }
}
exports.VendingMachine = VendingMachine;
