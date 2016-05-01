require('dotenv').load();
var stripe = require("stripe")("sk_test_9r6Aok9aE7R49asFSnSlTvsK");
//sd​
var stripeToken;
// var card = {card:{
//        number: '4242424242424242',
//        cvc: '123',
//        exp_month: 12,
//        exp_year: 2017,
//      }
//     };
// console.log(card);
 stripe.tokens.create({card:{
        number: '4242424242424242',
        cvc: '123',
        exp_month: 12,
        exp_year: 2017,
      }
     }, function(err, token) {
  // response.id is the card token.
  if(err) throw err
  stripeToken=token.id;
  console.log(stripeToken);
  charge();
});

var charge = function(){stripe.charges.create({
  amount: 1000,
  source: stripeToken,
  currency: 'usd',
  description: "Test charge"
}, function(err, charge) {
  if (err) {
    console.log(err);
  }
  else
  	console.log(charge);
});
}
