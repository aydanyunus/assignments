import { v4 as uuid } from "uuid";
export var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum["USD"] = "USD";
    CurrencyEnum["UAH"] = "UAH";
})(CurrencyEnum || (CurrencyEnum = {}));
export class Transaction {
    constructor(amount, currency) {
        this.id = uuid();
        this.amount = amount;
        this.currency = currency;
    }
}
export class Card {
    constructor() {
        this.transactions = [];
    }
    addTransaction(arg1, arg2) {
        if (arg1 instanceof Transaction) {
            this.transactions = [...this.transactions, arg1];
            return arg1.id;
        }
        else if (typeof arg1 === "number" && arg2 !== undefined) {
            const newTransaction = new Transaction(arg1, arg2);
            this.transactions = [...this.transactions, newTransaction];
            return newTransaction.id;
        }
        else {
            throw new Error("invalid input for transaction");
        }
    }
    getTransaction(id) {
        return this.transactions.find((transaction) => transaction.id === id);
    }
    getBalance(currency) {
        let total = 0;
        this.transactions.forEach((transaction) => {
            if (transaction.currency === currency) {
                total += transaction.amount;
            }
        });
        return total;
    }
}
