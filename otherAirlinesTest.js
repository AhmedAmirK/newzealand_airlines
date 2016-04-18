var moment = require('moment');
var otherAirlines= require('./app/otherAirlines');
var array =require("./public/data/otherAirLinesURLS.json").serverIP
otherAirlines.setOrigin("CAI");
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1b87de2bbdcc2b8098ab06faa5212aa56460f750
otherAirlines.setDestination("JED");
otherAirlines.setDepartingDate(moment("2016-04-30 24:00:00.000"));
otherAirlines.setReturningDate(moment("2016-05-30 24:00:00.000"));
otherAirlines.setClass('economy');

otherAirlines.OneWayFlight();
otherAirlines.TwoWayFlight();
<<<<<<< HEAD
=======
=======
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
>>>>>>> 533bc83c7594ad0bb85d5eadb9c3fb58337ac193
>>>>>>> 1b87de2bbdcc2b8098ab06faa5212aa56460f750
