var mongo = require('mongodb').MongoClient,
 Logger = require('mongodb').Logger;
var DB = null;
var dbURL = 'mongodb://localhost:27017/MyDatabase';

/* ||||||||||||||||| Reference to our schema |||||||||||||||||||||||||||||||
var flightSchema = new Schema ({

    flightNumber: String,
    aircraft:{name:String, model:String, type:String},
    date: { type: Date, default: Date.now },
    duration: Number,
    origin: String,
    destination: String,
    occupiedSeatsBusiness :
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
    price:{business: Number , economy: Number , currency:String},
    capacity:{business:Number , economy:Number},
    AirLine:{ type: String, default:'AirNewZealand'}
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
        business : {windowMaximum:Number , aisleMaximum:Number , cabinMaximum:Number},
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
|||||||||||||SCHEMA END||||||||||||||||||||||||||||  */

 exports.connect = function(cb) {
     return mongo.connect(dbURL, function(err, db) {
         if (err) return cb(err);
         Logger.setLevel('info');
         console.log('connected to db');
         DB = db;
         cb(null, db);
     });
 };

exports.getFlights = function(cb) {
    DB.collection('flights').find().toArray(function(err,data) {
        if(err)
            cb(err,null);
        else
            cb(null,data);
    });
};

exports.getBookings = function(cb) {
  DB.collection('bookings').find().toArray(function(err,data) {
      if(err)
          cb(err,null);
      else
          cb(null,data);
  });
};

exports.getAircrafts = function(cb) {
  DB.collection('aircrafts').find().toArray(function(err,data) {
      if(err)
          cb(err,null);
      else
          cb(null,data);
  });
};

exports.getAirports = function(cb) {
  DB.collection('airports').find().toArray(function(err,data) {
      if(err)
          cb(err,null);
      else
          cb(null,data);
  });
};

exports.clearFlights = function(cb){
    DB.collection('flights').removeMany(function(){console.log('Successfully cleared Flights');
cb();
  });
};

exports.clearBookings = function(cb){
  DB.collection('bookings').removeMany(function(){console.log('Successfully cleared Bookings');
cb();
});
};

exports.clearAircrafts = function(cb){
  DB.collection('aircrafts').removeMany(function(){console.log('Successfully cleared Aircrafts');
cb();
});
};

exports.clearAirports = function(cb){
  DB.collection('airports').removeMany(function(){console.log('Successfully cleared Airports');
cb();
});
};

exports.insertInFlights = function(jsonObject , cb){
    DB.collection('flights').insertOne(jsonObject,function(err){
        if(err)
            cb(err);
        else
            cb(null);
    });
}

exports.insertInBookings = function(jsonObject , cb){
    DB.collection('bookings').insertOne(jsonObject,function(err){
        if(err)
            cb(err);
        else
            cb(null);
    });

}

exports.insertInAircrafts = function(jsonObject , cb){
    DB.collection('aircrafts').insertOne(jsonObject,function(err){
        if(err)
            cb(err);
        else
            cb(null);
    });
}

exports.insertInAirports = function(jsonObject , cb){
    DB.collection('airports').insertOne(jsonObject,function(err){
        if(err)
            cb(err);
        else
            cb(null);
    });
}

exports.importAirports = function(data,cb){
  DB.collection('airports').insertMany(data,function(err){
      if(err)
          cb(err);
      else
          cb(null);
  });
}

exports.importAircrafts = function(data,cb){
  DB.collection('aircrafts').insertMany(data,function(err){
      if(err)
          cb(err);
      else
          cb(null);
  });
}

exports.importFlights = function(data,cb){
  DB.collection('flights').insertMany(data,function(err){
      if(err)
          cb(err);
      else
          cb(null);
  });
}

exports.searchInFlights = function(jsonObject , cb){
  DB.collection('flights').find(jsonObject).toArray(function(err,data) {
      if(err)
          cb(err,null);
      else
          cb(null,data);
  });
}

exports.searchInBookings = function(jsonObject , cb){
  DB.collection('bookings').find(jsonObject).toArray(function(err,data) {
      if(err)
          cb(err,null);
      else
          cb(null,data);
  });
}

exports.searchInAircrafts = function(jsonObject , cb){
  DB.collection('aircrafts').find(jsonObject).toArray(function(err,data) {
      if(err)
          cb(err,null);
      else
          cb(null,data);
  });
}

exports.searchInAirports = function(jsonObject , cb){
  DB.collection('airports').find(jsonObject).toArray(function(err,data) {
      if(err)
          cb(err,null);
      else
          cb(null,data);
  });
}
