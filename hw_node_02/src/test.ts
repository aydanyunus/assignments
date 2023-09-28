import { CurrencyEnum } from "./app.js";
import { Transaction } from "./app.js";
import { Card } from "./app.js";

const transactionOne = new Transaction(200, CurrencyEnum.USD);
const transactionTwo = new Transaction(500, CurrencyEnum.UAH);
const transactionThree = new Transaction(1000, CurrencyEnum.USD);

console.log(transactionTwo);
console.log(transactionOne.currency);


const newCard = new Card();
newCard.addTransaction(transactionOne);
newCard.addTransaction(transactionTwo);
newCard.addTransaction(transactionThree);

console.log(newCard);

newCard.addTransaction(2000, CurrencyEnum.UAH);
newCard.addTransaction(5000, CurrencyEnum.USD);


console.log(newCard);


console.log(newCard.getTransaction(transactionTwo.id));

console.log(newCard.getBalance(CurrencyEnum.USD));
console.log(newCard.getBalance(CurrencyEnum.UAH));

