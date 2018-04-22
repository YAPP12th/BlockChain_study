import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var client = new CoinStack('', '');
client.protocol = 'http://';
client.endpoint = 'testchain.blocko.io'

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  client.getBlockchainStatus(function (err, status) {
    console.log(status);
  });
});

Template.hello.helpers({
  counter() {
    // 데이터 출력 담당
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    console.log();

    instance.counter.set(client.getBlockchainStatusSync() + " " + instance.counter.get() + 2);
  },
});
