"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vendingMachine_1 = require("./modules/vendingMachine");
const product_1 = require("./modules/product");
const wallet_1 = require("./modules/wallet");
const cocaCola = new product_1.Drink("Coca Cola", 25, "A cold soda that will quench your thirst");
// const ranchChips = new Chips(
//   "Ranch Chips",
//   35,
//   "A salty snack to satisfy your cravings"
// );
const chips = [
    { name: "Chips 1", price: 21, description: "Goda chips" },
    { name: "Chips 2", price: 22, description: "Goda chips" },
];
const myChips = chips.map((chips) => new product_1.Chips(chips.name, chips.price, chips.description));
const wallet = new wallet_1.Wallet(100);
// const machine = new VendingMachine([cocaCola, ranchChips]);
const machine = new vendingMachine_1.VendingMachine(myChips);
machine.listProducts();
