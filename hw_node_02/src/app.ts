import { v4 as uuid } from "uuid";

export enum CurrencyEnum {
  USD = "USD",
  UAH = "UAH",
}

export class Transaction {
  id: string;
  amount: number;
  currency: CurrencyEnum;
  constructor(amount: number, currency: CurrencyEnum) {
    this.id = uuid();
    this.amount = amount;
    this.currency = currency;
  }
}

export class Card {
  transactions: Transaction[];
  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction: Transaction): string;
  addTransaction(amount: number, currency: CurrencyEnum): string;

  addTransaction(arg1: Transaction | number, arg2?: CurrencyEnum): string {
    if (arg1 instanceof Transaction) {
      this.transactions = [...this.transactions, arg1];
      return arg1.id;
    } else if (typeof arg1 === "number" && arg2 !== undefined) {
      const newTransaction = new Transaction(arg1, arg2);
      this.transactions = [...this.transactions, newTransaction];
      return newTransaction.id;
    } else {
      throw new Error("invalid input for transaction");
    }
  }

  getTransaction(id: string): Transaction | undefined {
    return this.transactions.find((transaction) => transaction.id === id);
  }

  getBalance(currency: CurrencyEnum): number {
    let total = this.transactions.reduce(
      (sum: number, transaction: Transaction) => {
        if (transaction.currency === currency) {
          sum += transaction.amount;
        }
        return sum;
      },
      0
    );
    return total;
  }
}
