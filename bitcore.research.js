const bitcore = require("bitcore-lib");

// var rand_buffer = bitcore.crypto.Random.getRandomBuffer(32);
// var rand_number = bitcore.crypto.BN.fromBuffer(rand_buffer);

// console.log(rand_number.toString());

// var address = new bitcore.PrivateKey(rand_number).toAddress();
// console.log(address);

// var privateKeyWIF = "cU5J8uCFM2iAo74aAkDYrrKeqvkQf7czKWp8bE8qG5VRu4c5zzwi";
// var privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF);
// var address = privateKey.toAddress().toString();
// let address = "n24amS5eyU4gLeuHhrU9wpTWikXHyXf7hC";

var privateKey = new bitcore.PrivateKey();

var address = privateKey.toAddress();

console.log(address.toString());
console.log(privateKey.toString());
