const axios = require("./axios.help");
const bitcore = require("bitcore-lib");

const bip32 = require("bip32");
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");

const network = bitcoin.networks.testnet;
// Derivation path
const path = `m/49'/0'/0'/0`; // Use m/49'/1'/0'/0 for testnet

const sendBitcoin = (recieverAddress, amountToSend, privateKey) => {
  const rawTransaction = getRawHex(unspentOutput.txid); //haven’t shared this method’s implementation as it’s trivial
  let key = bitcoin.ECKey.fromWIF(privateKey);
  console.log(key.pub.getAddress().toString());
  var tx = new bitcoin.TransactionBuilder();
  console.log(tx);
};

const getBalance = async (address) => {};

const generateWallet = () => {
  let mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  let root = bip32.fromSeed(seed, network);

  let account = root.derivePath(path);
  let node = account.derive(0).derive(0);

  let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
  }).address;

  console.log(`
Wallet generated:
 - Address  : ${btcAddress},
 - Key : ${node.toWIF()}, 
 - Mnemonic : ${mnemonic}   
`);
};

//sendBitcoin("", "", "cU5J8uCFM2iAo74aAkDYrrKeqvkQf7czKWp8bE8qG5VRu4c5zzwi");
// axios
//   .GET(
//     "https://sochain.com/api/v2/get_tx_unspent/BTCTEST/n24amS5eyU4gLeuHhrU9wpTWikXHyXf7hC"
//   )
//   .then((res) => {
//     console.log(res.data.txs);
//   });

generateWallet();
