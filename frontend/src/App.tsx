import "./index.css";
import { VendingMachine } from "../../src/modules/vendingMachine";
import { Drink, Chips } from "../../src/modules/product";
import { Wallet } from "../../src/modules/wallet";

const chips = [
  { name: "Ranch chips", price: 21, description: "Tasty chips" },
  { name: "Sourcream chips", price: 22, description: "Tasty chips" },
];

const drinks = [
  { name: "Coca cola", price: 15, description: "Cold and bubbly" },
  { name: "Fanta", price: 15, description: "Cold and bubbly" },
];

const myChips = chips.map(
  (chips) => new Chips(chips.name, chips.price, chips.description)
);

const myDrinks = drinks.map(
  (drinks) => new Drink(drinks.name, drinks.price, drinks.description)
);

const machine = new VendingMachine([...myChips, ...myDrinks]);
const wallet = new Wallet(100);

const buyProduct = (index: number) => {
  wallet.pay(index);
  console.log(wallet.getBalance());
};

const App = () => {
  return (
    <>
      <h1>Vending Machine</h1>
      <p>You've got {wallet.getBalance()} kr</p>
      <ul style={{ listStyle: "none" }}>
        {machine.listProducts().map((product, index) => (
          <li key={index}>
            {product}
            <button onClick={() => buyProduct(index)}>Purchase</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
