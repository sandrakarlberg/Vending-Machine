class Wallet {
  public balance: number;
  
  constructor(startAmount: number) {
    this.balance = startAmount;
  }

  getBalance(): number {
    return this.balance;
  }

  pay(amount: number): boolean {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
}

export { Wallet };
