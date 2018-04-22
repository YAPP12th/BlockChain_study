import { Mongo } from 'meteor/mongo';
//import CoinStack from 'coinstack-sdk-js';

Wallets = new Mongo.Collection('wallets');
Transactions = new Mongo.Collection('transactions');

var accessKey = "";
var secretKey = "";
client = new CoinStack(accessKey, secretKey, 'testchain.blocko.io', 'https');

Meteor.publish('wallets', function () {
    return Wallets.find({
        user: this.userId
    });
});

Meteor.publish('transactions', function () {
    return Transactions.find({
        user: this.userId
    });
});

Meteor.methods({
    'addAddress'(walletAttributes) {
        var user = Meteor.user();
        if (!user)
            throw new Meteor.Error('NOT_LOGGED_IN', "needs to be logged in");

        if (!walletAttributes.name) {
            throw new Meteor.Error('NAME_EMPTY', "name empty");
        }

        var userId = Meteor.userId();
        walletAttributes._id = walletAttributes.address;
        walletAttributes.user = userId;
        walletAttributes.createAt = new Date();

        Wallets.insert(walletAttributes);

        return true;
    },
    'checkBalance'(address) {
        console.log('checkBalance');
        console.log(address);

        walletAttributes = {};
        walletAttributes._id = address;
        walletAttributes.user = Meteor.userId();

        var balance = client.getBalanceSync(address);
        console.log(balance);

        Wallets.update({
            _id: walletAttributes._id,
            user: walletAttributes.user
        }, {
            $set: {
                balance: balance
            }
        });
    },
    'checkTXs'(address) {
        var txs = client.getTransactionsSync(address);

        Transactions.upsert({
            _id: walletAttributes._id,
            user: walletAttributes.user
        }, {
            $set: {
                txs: txs
            }
        });
    },
    'balancePlease'(address) {
        var bigWallet = Wallets.findOne({}, {sort: {balance: -1}});
        console.log(bigWallet.key);

        var txBuilder = client.createTransactionBuilder();
        txBuilder.addOutput(address, CoinStack.Math.toSatoshi("0.1"));
        txBuilder.setInput(bigWallet.address);
        txBuilder.setFee(CoinStack.Math.toSatoshi("0.0001"));
        txBuilder.buildTransaction(function(err, tx) {
            if(err) {
                console.log(err);
            } else {
                tx.sign(bigWallet.key);
                var rawSignedTx = tx.serialize();
                // send transaction
                client.sendTransaction(rawSignedTx, function(err) {
                    if (null != err) {
                        console.log("failed to send tx");
                    } else {
                        console.log("succeed to send tx");
                    }
                });
            }
        });
    }
});