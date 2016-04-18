var moment = require('moment');
var otherAirlines= require('./app/otherAirlines');
otherAirlines.setOrigin("CAI");
otherAirlines.setDestination("JED");
otherAirlines.setDepartingDate(moment("2016-04-30 24:00:00.000"));
otherAirlines.setReturningDate(moment("2016-05-30 24:00:00.000"));
otherAirlines.setClass('economy');

otherAirlines.OneWayFlight();
otherAirlines.TwoWayFlight();
