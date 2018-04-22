import { Meteor } from 'meteor/meteor';
//import CoinStack from 'coinstack-sdk-js';

var accessKey = "c7dbfacbdf1510889b38c01b8440b1";
var secretKey = "10e88e9904f29c98356fd2d12b26de";

Meteor.startup(() => {
  // code to run on server at startup
  //client = new CoinStack(accessKey, secretKey, 'testchain.blocko.io', 'https');

  var param = {
    test: 'value'
  };

  //console.log(Meteor.userId());

  //Wallets.insert(param);
  //console.log(Wallets.find().fetch());
});
