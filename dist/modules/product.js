"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chips = exports.Drink = exports.Product = void 0;
class Product {
    name;
    price;
    description;
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
exports.Product = Product;
class Drink extends Product {
    buy() {
        return `You bought a ${this.name} for ${this.price} kr.`;
    }
    use() {
        return `You drink the ${this.name}`;
    }
}
exports.Drink = Drink;
class Chips extends Product {
    buy() {
        return `You bought a bag of ${this.name} for ${this.price}`;
    }
    use() {
        return `You grab a handful of ${this.name}`;
    }
}
exports.Chips = Chips;
