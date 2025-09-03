"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    balance;
    constructor(startAmount) {
        this.balance = startAmount;
    }
    getBalance() {
        return this.balance;
    }
    pay(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
exports.Wallet = Wallet;
