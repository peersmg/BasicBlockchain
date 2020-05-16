const {Blockchain, Transaction} = require("./blockchain")

let mattCoin = new Blockchain();

mattCoin.createTransaction(new Transaction('address1', 'address2', 100));
mattCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log("\n Starting the miner...");
mattCoin.minePendingTransactions("mattAddress");

console.log("Balance of matt is " + mattCoin.getBalanceOfAddress("mattAddress"))

console.log("\n Starting the miner...");
mattCoin.minePendingTransactions("mattAddress");

console.log("Balance of matt is " + mattCoin.getBalanceOfAddress("mattAddress"))
console.log("Balance of address1 is " + mattCoin.getBalanceOfAddress("address1"))
console.log("Balance of address2 is " + mattCoin.getBalanceOfAddress("address2"))