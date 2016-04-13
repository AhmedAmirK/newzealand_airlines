
var mongoose = require('mongoose');
var DB = null; 
var Schema = mongoose.Schema;

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
    "occupiedSeatsEconomy":
    [     
            {
                  type: String,
                  Number: String,
                  bookingRefNo: String
            }
    ],
    "price":{first: Number , economy: Number}

});

var bookingSchema = new Schema({

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
	mongoose.connect('mongodb://localhost:27017/MyDatabase');
    DB = mongoose.connection;
    DB.on('error', function(){
        console.log('Error connecting to the database');
    });
    DB.once('open', function() {
        console.log('Successfully connected to the database');
        cb();
    });
};

exports.getDatabase = function() {
    if (DB === null) throw Error('DB Object has not yet been initialized');
    return DB;
};

/*exports.databaseToArray = function(cb) {
    DB.find({}, function(err, data) {
        if(err){
            cb(err,null);
        }
        else{
            var array = {};
            array.forEach(function(user) {
                userMap[user._id] = user;
            });
        cb(null , array);
        }
    });
};*/

/*  User.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });

    res.send(userMap);  
  });
*/
exports.clearDatabase = function(cb) { 

    if(DB != null){
        mongoose.connection.db.dropDatabase(cb);
        console.log('Successfully cleared the database');
    }

};

