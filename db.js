
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Flight , Booking , Aircraft , Airport;

var flightSchema = new Schema ({

    flightNumber: String,
    aircraft: String,
    date: { type: Date, default: Date.now },
    duration: Number,
    origin: String,
    destination: String,
    occupiedSeatsFirst : 
    [     
            {
                  type: String,
                  Number: String,
                  bookingRefNo: String
            }
    ],
    occupiedSeatsEconomy:
    [     
            {
                  type: String,
                  Number: String,
                  bookingRefNo: String
            }
    ],
    price:{first: Number , economy: Number , currency:String}
});

var bookingSchema = new Schema({
    email: String, 
    id: String , 
    firstName: String,
    lastName: String,
    passport: String,
    issueDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, default: Date.now },
    TotalPrice: Number,
    receipt_number: String,
    flightNumber: String, 
    bookingRefNumber: String,
    seat:{number: String , class: String , type:String} 

});

var aircraftSchema = new Schema({

    name: String,
    type:String,     //Example : Boeing
    model:Number,   
    capacity: Number,
    seatmap:
    {
        first : {windowMaximum:Number , aisleMaximum:Number , cabinMaximum:Number},
        economy : {windowMaximum:Number , aisleMaximum:Number , cabinMaximum:Number}
    }

});

var airportSchema = new Schema(
    {
        "iata": String,
        "lon": Number,
        "iso": String,
        "status": Number,
        "name": String,
        "continent": String,
        "type": String,
        "lat": Number,
        "size": String
    }
);

exports.connect = function(cb){
    var connection = mongoose.createConnection('mongodb://localhost:27017/MyDatabase');
    connection.on('error', function(){
        console.log('Error connecting to the database');
    });
    connection.once('open', function() {
        console.log('Successfully connected to the database');
        Flight = connection.model('Flight' , flightSchema);
        Booking = connection.model('Booking' , bookingSchema);
        Aircraft = connection.model('Aircraft' , aircraftSchema);
        Airport = connection.model('Airport', airportSchema);
        cb();
    });
};

exports.getFlights = function(cb) {
    Flight.find(function(err,data) {
        if(err)
            cb(err,null);
        else
            cb(null,data);
    });
};

exports.getBookings = function(cb) {
    Booking.find(function(err,data) {
        if(err)
            cb(err,null);
        else
            cb(null,data);
    });
};

exports.getAircrafts = function(cb) {
    Aircraft.find(function(err,data) {
        if(err)
            cb(err,null);
        else
            cb(null,data);
    });
};

exports.getAirports = function(cb) {
    Airport.find(function(err,data) {
        if(err)
            cb(err,null);
        else
            cb(null,data);
    });
};

exports.clearFlights = function(cb){
    Flight.remove(function(){console.log('Successfully cleared Flights')});
    cb();
};

exports.clearBookings = function(cb){
    Booking.remove(function(){console.log('Successfully cleared Bookings')});
    cb();
};

exports.clearAircrafts = function(cb){
    Aircraft.remove(function(){console.log('Successfully cleared Aircrafts')});
    cb();
};

exports.clearAirports = function(cb){
    Airport.remove(function(){console.log('Successfully cleared Airports')});
    cb();
};

exports.insertInFlights = function(jsonObject , cb){ 
    var tuple = new Flight(jsonObject);
    tuple.save(function(err){
        if(err)
            cb(err);
        else
            cb(null);
    });
}

exports.insertInBookings = function(jsonObject , cb){ 
    var tuple = new Booking(jsonObject);
    tuple.save(function(err){
        if(err)
            cb(err);
        else
            cb(null);
    });
}

exports.insertInAircrafts = function(jsonObject , cb){ 
    var tuple = new Aircraft(jsonObject);
    tuple.save(function(err){
        if(err)
            cb(err);
        else
            cb(null);
    });
}

exports.insertInAirports = function(jsonObject , cb){ 
    var tuple = new Airport(jsonObject);
    tuple.save(function(err){
        if(err)
            cb(err);
        else
            cb(null);
    });
}

exports.importAirports = function(data,cb){

	data.forEach(function(air){
		var tuple = new Airport(air);
		tuple.save(function(err){
			if (err)
				cb(err);
			else cb(null);
		});
	});
}

exports.searchInFlights = function(jsonObject , cb){
    var query = Flight.find(jsonObject);
    query.exec(function (err, results) {
        if(err)
            cb(err,null);
        else
            cb(null,results);
    });
}

exports.searchInBookings = function(jsonObject , cb){
    var query = Booking.find(jsonObject);
    query.exec(function (err, results) {
        if(err)
            cb(err,null);
        else
            cb(null,results);
    });
}

exports.searchInAircrafts = function(jsonObject , cb){
    var query = Aircraft.find(jsonObject);
    query.exec(function (err, results) {
        if(err)
            cb(err,null);
        else
            cb(null,results);
    });
}

exports.searchInAirports = function(jsonObject , cb){
    var query = Airport.find(jsonObject);
    query.exec(function (err, results) {
        if(err)
            cb(err,null);
        else
            cb(null,results);
    });
}