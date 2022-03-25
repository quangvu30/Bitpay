const bitcore = require("bitcore-lib");
const axios = require("./axios.help");

const createTxn = async (
  ownerAddress,
  prKey,
  recieverAddress,
  amountToSend
) => {
  let privateKey = new bitcore.PrivateKey(prKey);
  let txn = await axios.GET(
    `https://sochain.com/api/v2/get_tx_unspent/BTCTEST/${ownerAddress}`
  );
  const pre_txn = txn.data.txs[0];

  var utxo = {
    txId: pre_txn.txid,
    outputIndex: 0,
    address: ownerAddress,
    script: pre_txn.script_hex,
    satoshis: Number(pre_txn.value) * 100000000,
  };

  var transaction = new bitcore.Transaction()
    .from(utxo)
    .to(recieverAddress, amountToSend)
    .sign(privateKey);
  console.log(transaction.serialize());
};

createTxn(
  "n24amS5eyU4gLeuHhrU9wpTWikXHyXf7hC",
  "cU5J8uCFM2iAo74aAkDYrrKeqvkQf7czKWp8bE8qG5VRu4c5zzwi",
  "mpGmg6jv8nJjMjyHkwaiFmz1WtsthMhFEy",
  1000
).then();
