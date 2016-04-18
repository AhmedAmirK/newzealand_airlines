var moment = require('moment');
var otherAirlines= require('./app/otherAirlines');
var array =require("./public/data/otherAirLinesURLS.json").serverIP
otherAirlines.setOrigin("CAI");
otherAirlines.setDestination("JAD");
otherAirlines.setDepartingDate(moment("2016-04-25").toDate().getTime());
otherAirlines.setReturningDate(moment("2016-05-30").toDate().getTime());
otherAirlines.setClass('economy');

for (i in array){
  console.log(array[i]);
  otherAirlines.setUri(array[i]);
  otherAirlines.OneWayFlight();
}
// otherAirlines.OneWayFlight();

// otherAirlines.setUri("localhost");
//   otherAirlines.OneWayFlight();
