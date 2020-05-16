const {Blockchain, Transaction} = require("./blockchain")
const EC = require("elliptic").ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('04415328ae97da87e3d1ff346559645284123b992eaddbd42b71801648a68cafdaed23ac3ee60ad2b0b687a2419a14e782b9cea320a35a612591a3c5f70d35e306');
const walletAddress = myKey.getPublic('hex');


let mattCoin = new Blockchain();

const tx1 = new Transaction(walletAddress, 'public key here', 10);
tx1.signTransaction(myKey);
mattCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
mattCoin.minePendingTransactions(walletAddress);

console.log("Balance of matt is " + mattCoin.getBalanceOfAddress(walletAddress))

console.log("Is chain valid: " + mattCoin.isChainValid())