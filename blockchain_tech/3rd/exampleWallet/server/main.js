import { Meteor } from 'meteor/meteor';

var client = new CoinStack('', '');
client.protocol = 'http://';
client.endpoint = 'testchain.blocko.io';

Wallets = new Mongo.Collection('wallets');
Transactions = new Mongo.Collection('transactions');

Meteor.startup(() => {
  // code to run on server at startup
  console.log('server function')

  console.log(client.getBlockchainStatusSync())

  var privatekey = CoinStack.ECKey.createKey();
  console.log(privatekey);
  var address = CoinStack.ECKey.deriveAddress(privatekey);
  console.log(address);
});
