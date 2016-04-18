var db = require('../db.js');
var airports = require('../public/data/airports.json');
var aircrafts = require('../public/data/aircrafts.json');
var mongoose = require('mongoose');
var flights = require('./Flights.js');
var moment = require('moment');
var jwt = require('jsonwebtoken');
var request = require("request");
require('dotenv').load();

var bookingRefNumber = 0 , seatNum = 0;

//App routes :

module.exports = function(app) { 



    app.get('/db/seed', function(req, res) {

        db.importAirports(airports, function(err) {
            if (err) console.log(err);
        });

        db.importAircrafts(aircrafts, function(err) {
            if (err) console.log(err);
        });

        db.importFlights(flights, function(err) {
            if (err) console.log(err);
        });

        res.send('done');

    });

    /* DELETE DB */
    app.get('/db/delete', function(req, res) {

        db.clearFlights(function() {
            db.clearBookings(function() {
                db.clearAirports(function() {
                    db.clearAircrafts(function() {
                        res.send('done');
                    });
                });

            });
        });


    });

    app.get('/api/flights/track/:flightNumber', function(req, res) {
        var num = req.params.flightNumber;

        db.searchInFlights({'flightNumber':num} , function(err,results){
        if(err == null && results.length > 0)
            res.json(results[0]);
        else
            console.log(err);

        });
    });



    app.get('/api/data/codes', function(req, res) {

        res.json(airports);
    });



    /* RENDER MAIN PAGE */
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });



    app.get('/api/data/flights', function(req, res) {

        db.getFlights(function(err, data) {
            res.json(data);
        });

    });

   
    app.get('/api/local/flights/search/:origin/:destination/:departingDate', function(req, res) {
        var origin = req.params.origin;
        var destination = req.params.destination;
        var depDate = moment(new Date(req.params.departingDate)).format('YYYY-MM-DD');
        var jsonObject = {
            'origin':origin ,
            'destination':destination, 
            'departuredatetime':depDate
        };
        db.searchInFlights(jsonObject, function(err,results){
            if(err == null)
                res.json({outgoingFlights:results});

            else
                console.log(err);
        });
    });

    app.get('/api/local/flights/search/:origin/:destination/:departingDate/:returningDate', function(req, res) {


        var origin = req.params.origin;
        var destination = req.params.destination;

        var depDate = moment(new Date(req.params.departingDate)).format('YYYY-MM-DD');

        var retDate = moment(new Date(req.params.returningDate)).format('YYYY-MM-DD');

        var jsonObject = {
            'origin':origin,
            'destination':destination,
            'departuredatetime':depDate
        };

        var jsonObject2 = {
            'origin':destination,
            'destination':origin,
            'departuredatetime':retDate
        };

        db.searchInFlights(jsonObject , function(err,results){
            if(err == null){
              console.log(results);
              db.searchInFlights(jsonObject2 , function(err2,results2){
                if(err2 == null){
                  console.log(results2);
                    res.json({outgoingFlights:results , returnFlights:results2});
                }
                else
                    console.log(err);
              });  
            }
            else
                console.log(err);
        });
        
    });

    app.post('/api/booking/:email/:expiryDate/:TotalPrice/:flightNumber/:seatClass/:seatType', function(req, res) {

        var email = req.params.email;
        var TotalPrice = req.params.TotalPrice;
        var flightNumber = req.params.flightNumber;
        var seatClass = req.params.seatClass;
        var seatType = req.params.seatType;

        var jsonObject = {
          'email': email,
          'TotalPrice': TotalPrice,
          'flightNumber': flightNumber,
          'bookingRefNumber': bookingRefNumber,
          'seat' : {
            'number': seatNum , 
            'class': seatClass , 
            'type': seatType
          }
        };

        db.insertInBookings(jsonObject, function(err) {
            if (err != null) {
                console.log(err);
            }
            else{
              bookingRefNumber = bookingRefNumber + 1;
              seatNum = seatNum + 1;
              console.log('REF : '+bookingRefNumber);
            }
        });

    });

    //////TOKEN///////
/*    app.get('/api/token',function(request,response){
        var jwtSecret = process.env.JWTSECRET;
        var token = jwt.sign('payload', jwtSecret,  { algorithm: 'HS256' });
        response.json({token:token});
    });*/

    ////////////////////////////////////////////MIDDELE WARRREE!!!!
/*    app.use(function(req, res, next) {
          var token = req.body.wt || req.query.wt || req.headers['x-access-token'];

          console.log("{{{{ TOKEN }}}} ", token);

          var jwtSecret = process.env.JWTSECRET;

          // Get JWT contents:
          try
          {
            var payload = jwt.verify(token, jwtSecret);
            req.payload = payload;
            next();
          }
          catch (err)
          {
            console.log(err);
            //console.error('[ERROR]: JWT Error reason:', err);
            //res.status(403).sendFile(path.join(__dirname, '../public/assets', '403.jpg'));
          }

    });*/
        ////////////////////////////////////// END OF MIDDLEWARE!!!

    app.get('/api/flights/search/:origin/:destination/:departingDate/:class', function(req, res) {
        var origin = req.params.origin;
        var destination = req.params.destination;
        var depDate = moment(new Date(req.params.departingDate)).toDate().getTime();
        var jsonObject = {
            'origin':origin ,
            'destination':destination, 
            'departuredatetime':depDate
        };
        db.searchInFlights(jsonObject, function(err,results){
            if(err == null){
                res.json({outgoingFlights:results});
            }
            else
                console.log(err);
        });
    });

    app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class', function(req, res) {


        var origin = req.params.origin;
        var destination = req.params.destination;

        var depDate = moment(new Date(req.params.departingDate)).toDate().getTime();

        var retDate = moment(new Date(req.params.returningDate)).toDate().getTime();

        var jsonObject = {
            'origin':origin,
            'destination':destination,
            'departuredatetime':depDate
        };

        var jsonObject2 = {
            'origin':destination,
            'destination':origin,
            'departuredatetime':retDate
        };

        db.searchInFlights(jsonObject , function(err,results){
            if(err == null){
              console.log(results);
              db.searchInFlights(jsonObject2 , function(err2,results2){
                if(err2 == null){
                  console.log(results2);
                    res.json({outgoingFlights:results , returnFlights:results2});
                }
                else
                    console.log(err);
              });  
            }
            else
                console.log(err);
        });
        
    });

    //////TOKEN///////
    app.get('/api/token',function(request,response){
        var jwtSecret = process.env.JWTSECRET;
        var token = jwt.sign('payload', jwtSecret,  { algorithm: 'HS256' });
        response.json({token:token});
    });

    ////////////////////////////////////////////MIDDELE WARRREE!!!!
    app.use(function(req, res, next) {
          var token = req.body.wt || req.query.wt || req.headers['x-access-token'];

          console.log("{{{{ TOKEN }}}} ", token);

          var jwtSecret = process.env.JWTSECRET;

          // Get JWT contents:
          try
          {
            var payload = jwt.verify(token, jwtSecret);
            req.payload = payload;
            next();
          }
          catch (err)
          {
            console.log(err);
            //console.error('[ERROR]: JWT Error reason:', err);
            //res.status(403).sendFile(path.join(__dirname, '../public/assets', '403.jpg'));
          }

    });
        ////////////////////////////////////// END OF MIDDLEWARE!!!

    app.get('/api/flights/search/:origin/:destination/:departingDate/:class', function(req, res) {
        var origin = req.params.origin;
        var destination = req.params.destination;
        var depDate = moment(req.params.departingDate).format('YYYY-MM-DD');
        var jsonObject = {
            'origin':origin ,
            'destination':destination, 
            'departuredatetime':depDate
        };
        db.searchInFlights(jsonObject, function(err,results){
            if(err == null){

                res.json({outgoingFlights:results});
            }

            else
                console.log(err);
        });
    });

    app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class', function(req, res) {


        var origin = req.params.origin;
        var destination = req.params.destination;

        var depDate = new Date(moment(req.params.departingDate).format('YYYY-MM-DD'));

        var retDate = new Date(moment(req.params.returningDate).format('YYYY-MM-DD'));

        var jsonObject = {
            'origin':origin,
            'destination':destination,
            'departuredatetime':depDate
        };

        var jsonObject2 = {
            'origin':destination,
            'destination':origin,
            'departuredatetime':retDate
        };

        db.searchInFlights(jsonObject , function(err,results){
            if(err == null){
              console.log(results);
              db.searchInFlights(jsonObject2 , function(err2,results2){
                if(err2 == null){
                  console.log(results2);
                    res.json({outgoingFlights:results , returnFlights:results2});
                }
                else
                    console.log(err);
              });  
            }
            else
                console.log(err);
        });
        
    });
};
