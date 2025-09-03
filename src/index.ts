import { VendingMachine } from "./modules/vendingMachine";
import { Drink, Chips } from "./modules/product";
import { Wallet } from "./modules/wallet";

const cocaCola = new Drink(
  "Coca Cola",
  25,
  "A cold soda that will quench your thirst"
);

// const ranchChips = new Chips(
//   "Ranch Chips",
//   35,
//   "A salty snack to satisfy your cravings"
// );

const chips = [
  { name: "Chips 1", price: 21, description: "Goda chips" },
  { name: "Chips 2", price: 22, description: "Goda chips" },
];

const myChips = chips.map(
  (chips) => new Chips(chips.name, chips.price, chips.description)
);

const wallet = new Wallet(100);

// const machine = new VendingMachine([cocaCola, ranchChips]);

const machine = new VendingMachine(myChips);

machine.listProducts();
