var moment = require('moment');
// var otherAirlines= require('./app/otherAirlines');
// var array =require("./public/data/otherAirlinesURLS.json").serverIP;
var request = require("request");
var jwt = require('jsonwebtoken');
require('dotenv').load();

var jwtSecret = process.env.JWTSECRET;
var token = jwt.sign('payload', jwtSecret,  { algorithm: 'HS256' });

// otherAirlines.setOrigin("CAI");
// otherAirlines.setDestination("JED");
// otherAirlines.setDepartingDate(moment("April 22 2016","MMMM D YYYY").toDate().getTime());
// otherAirlines.setReturningDate(moment("2016-04-30 24:00:00.000"));
// otherAirlines.setClass('economy');
//
// otherAirlines.OneWayFlight();
// otherAirlines.TwoWayFlight();
//
//
// for (i in array){
//   console.log(array[i]);
//   otherAirlines.setUri(array[i]);
//   otherAirlines.OneWayFlight();
// }
// otherAirlines.OneWayFlight();
console.log(moment("04/30/2016", "MM-DD-YYYY").isValid());
console.log(moment("05/24/2016", "MM-DD-YYYY").toDate().getTime());
urli='http://'+"localhost:3000"+'/'+'api/flights/search/'+"CAI"+'/'+"JED"+'/'+moment("05/24/2016", "MM-DD-YYYY").toDate().getTime()+'/'+moment("05/28/2016", "MM-DD-YYYY").toDate().getTime()+'/'+"economy"+"/1";
// urli='http://'+"localhost:3000"+'/'+'api/flights/search/'+"CAI"+'/'+"JED"+'/'+moment("05/24/2016", "MM-DD-YYYY").toDate().getTime()+'/'+"economy";

  request({
      url: urli,
      json: true,
      headers: {
         'x-access-token': token
       }
  }, function (error, response, body) {
      if(error) console.log(error);
      // if (!error && response.statusCode === 200) {}
      else    console.log(body);
});
