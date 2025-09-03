const { VendingMachine } = require("../dist/modules/vendingMachine");
const { Drink, Chips } = require("../dist/modules/product");

test("VendingMachine lists products", () => {
  const products = [
    new Drink("Cola", 10, "Cold"),
    new Chips("Ranch", 15, "Tasty"),
  ];
  const machine = new VendingMachine(products);
  expect(machine.listProducts()).toEqual([
    "1. Cola is available for 10 kr",
    "2. Ranch is available for 15 kr",
  ]);
});
