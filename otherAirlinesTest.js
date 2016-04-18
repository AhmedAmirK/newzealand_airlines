var moment = require('moment');
var otherAirlines= require('./app/otherAirlines');
var array =require("./public/data/otherAirlinesURLS.json").serverIP;


otherAirlines.setOrigin("CAI");
otherAirlines.setDestination("JED");
otherAirlines.setDepartingDate(moment("April 22 2016","MMMM D YYYY").toDate().getTime());
otherAirlines.setReturningDate(moment("2016-05-30 24:00:00.000"));
otherAirlines.setClass('economy');

otherAirlines.OneWayFlight();
otherAirlines.TwoWayFlight();


for (i in array){
  console.log(array[i]);
  otherAirlines.setUri(array[i]);
  otherAirlines.OneWayFlight();
}
// otherAirlines.OneWayFlight();

// otherAirlines.setUri("localhost");
//   otherAirlines.OneWayFlight();
