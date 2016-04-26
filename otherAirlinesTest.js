var moment = require('moment');
// var otherAirlines= require('./app/otherAirlines');
// var array =require("./public/data/workingAirlines.json").serverIP;
var array =require("./public/data/otherAirlinesURLS.json").serverIP;
var request = require("request");
var jwt = require('jsonwebtoken');
require('dotenv').load();
const async = require('async');

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
// console.log(moment("04/30/2016", "MM-DD-YYYY").isValid());
// console.log(moment("05/24/2016", "MM-DD-YYYY").toDate().getTime());
// urli='http://'+"localhost:3000"+'/'+'api/flights/search/'+"CAI"+'/'+"JED"+'/'+moment("05/24/2016", "MM-DD-YYYY").toDate().getTime()+'/'+moment("05/28/2016", "MM-DD-YYYY").toDate().getTime()+'/'+"economy"+'/1';
// urli='http://'+"ec2-52-90-41-197.compute-1.amazonaws.com"+'/'+'api/flights/search/'+"CAI"+'/'+"JED"+'/'+moment("05/24/2016", "MM-DD-YYYY").toDate().getTime()+'/'+"economy";
//
//   request({
//       url: urli,
//       json: true,
//       headers: {
//          'x-access-token': token
//        }
//   }, function (error, response, body) {
//       if(error) console.log(error);
//       // if (!error && response.statusCode === 200) {}
//       else    console.log(body);
// });

// // var uri;
// function httpGet(uri, callback) {
// urli='http://'+uri+'/'+'api/flights/search/'+"CAI"+'/'+"JED"+'/'+moment("05/24/2016", "MM-DD-YYYY").toDate().getTime()+'/'+"economy";
// const options = {
// url: urli,
// json: true,
// headers: {
//    'x-access-token': token
//  }
// };
// console.log("Sending request to:"+ urli)
// request(options,
// function(err, res, body) {
//   console.log(body);
//   console.log(res);
//   console.log(err);
//   callback(err, body);
// }
// );
// }
//
// async.map(array, httpGet, function (err, res){
// if (err) console.log("err");
// console.log(res);
// // response.send(res);
// });

var queue = [];
var filterArr=[];
var response_count = 0;
function addToQueue(callback) {
  return function(err, res, body) {
    response_count +=1
    if (!err||body!= undefined || body !=null){ // website not down
      if(body.outgoingFlights != undefined ||body.returnFlights !=undefined){ // returns correct data
        queue.push(body)
      }
    }
    if (array.length===response_count) {
      callback(queue);
    }
  }
}

array.forEach(function(entry){ //this needs to be synchronus but works
  uri=entry;
  console.log(entry);
  urli='http://'+uri+'/'+'api/flights/search/'+"CAI"+'/'+"JED"+'/'+moment("05/24/2016", "MM-DD-YYYY").toDate().getTime()+'/'+"economy";
  request({
    url: urli,
    json: true,
    timeout:6000,
    headers: {
      'x-access-token': token
    }
  }, addToQueue(function (q) {
    var j=0;
    for(j=0;q.length>j;j++){
      if(q[j].outgoingFlights.length!=0 )
      filterArr.push(q[j]);
    }
    console.log(filterArr);
    console.log(filterArr[0].outgoingFlights);
    // console.log(q)
  }));
});
