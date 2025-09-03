abstract class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string
  ) {}
  abstract buy(): string;
  abstract use(): string;
}

class Drink extends Product {
  buy() {
    return `You bought a ${this.name} for ${this.price} kr.`;
  }
  use() {
    return `You drink the ${this.name}`;
  }
}

class Chips extends Product {
  buy() {
    return `You bought a bag of ${this.name} for ${this.price}`;
  }
  use() {
    return `You grab a handful of ${this.name}`;
  }
}

export { Product, Drink, Chips };
