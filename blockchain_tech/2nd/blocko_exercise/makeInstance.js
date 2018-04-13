var CoinStack = require('coinstack-sdk-js')

var accessKey = 'c7dbfacbdf1510889b38c01b8440b1'
var secretKey = '10e88e9904f29c98356fd2d12b26de'
var client = new CoinStack(accessKey, secretKey)

// console.log(client);

client.getBlockchainStatus(function(err, status) {
    console.log(status);
});

var privateKey = CoinStack.ECKey.createKey();
console.log(privateKey);

var address = CoinStack.ECKey.deriveAddress(privateKey);
console.log(address);
