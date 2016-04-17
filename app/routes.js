var db = require('../db.js');
var airports = require('../public/data/airports.json');
var aircrafts = require('../public/data/aircrafts.json');
var mongoose = require('mongoose');
var flights = require('./Flights.js');
var moment = require('moment');
var jwt = require('jsonwebtoken');
/**
 * App routes:
 */
module.exports = function(app, bodyparser) {



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

    /* Middleware */
    // app.use(function(req, res, next) {
    //   // check header or url parameters or post parameters for token
    //       var token = req.body.wt || req.query.wt || req.headers['x-access-token'];

    //       console.log("{{{{ TOKEN }}}} => ", token);

    //       var jwtSecret = process.env.JWTSECRET;

    //       // Get JWT contents:
    //       try
    //       {
    //         var payload = jwt.verify(token, jwtSecret);
    //         req.payload = payload;
    //         next();
    //       }
    //       catch (err)
    //       {
    //         console.log(err);
    //         //console.error('[ERROR]: JWT Error reason:', err);
    //         //res.status(403).sendFile(path.join(__dirname, '../public/assets', '403.jpg'));
    //       }

    // });


   
    app.get('/api/flights/search/:origin/:destination/:departingDate', function(req, res) {
        var origin = req.params.origin;
        var destination = req.params.destination;
        var depDate = req.params.departingDate;
        var depDateConverted = depDate.toDate();
        var jsonObject = {
            'origin':origin ,
            'destination':destination, 
            'departuredatetime':depDateConverted
        };
        db.searchInFlights(jsonObject, function(err,results){
            if(err == null)
                res.json({outgoingFlights:results});

            else
                console.log(err);
        });
    });

    app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate', function(req, res) {


        var origin = req.params.origin;
        var destination = req.params.destination;

        var depDate = req.params.departingDate;
        var depDateConverted = depDate.toDate();

        var retDate = req.params.returningDate;
        var retDateConverted = retDate.toDate();

        var jsonObject = {
            'origin':origin,
            'destination':destination,
            'departureDateTime':depDateConverted
        };

        var jsonObject2 = {
            'origin':destination,
            'destination':origin,
            'departureDateTime':retDateConverted
        };

        db.searchInFlights(jsonObject , function(err,results){
            if(err == null){
              db.searchInFlights(jsonObject2 , function(err2,results2){
                if(err2 == null)
                    res.json({outgoingFlights:results , returnFlights:results2});
                else
                    console.log(err);
              });  
            }
            else
                console.log(err);
        });
        
    });


    app.get('/api/booking/:email/:issueDate/:expiryDate/:TotalPrice/:flightNumber/:seatClass/:seatType', function(req, res) {
        var conditions = new Object();
        condition["email"] = req.params.email;
        condition["issueDate"] = req.params.issueDate;
        condition["expiryDate"] = req.params.expiryDate;
        condition["TotalPrice"] = req.params.TotalPrice;
        condition["flightNumber"] = req.params.flightNumber;
        condition["seatClass"] = req.params.seatClass;
        condition["seatType"] = req.params.seatType;
        var jsonObject = JSON.stringify(conditions);
        db.insertInBookings(jsonObject, function(err) {
            if (err != null) {
                console.log(err);
            }
        });
    });
    /**
     * ROUND-TRIP SEARCH REST ENDPOINT
     * @param origin - Flight Origin Location - Airport Code
     * @param destination - Flight Destination Location - Airport Code
     * @param departingDate - JavaScript Date.GetTime() numerical value corresponding to format `YYYY-MM-DD`
     * @param returningDate - JavaScript Date.GetTime() numerical value corresponding to format `YYYY-MM-DD`
     * @param class - economy or business only
     * @returns {Array}
     */
    // app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class', function(req, res) {
    //       // retrieve params from req.params.{{origin | departingDate | ...}}
    //       var origin=req.params.origin;
    //       var destination=req.params.destination;
    //       var departingDate=req.params.departingDate;
    //       var returningDate= req.params.returningDate;
    //       var Class = req.params.class;
    //       var result={};
    //       var outgoingFlightsArr=[];
    //       var returningFlightsArr=[];
    //       db.getFlights(function(err,data){
    //         if(err) throw err;
    //         var j=0;
    //         var k=0;
    //         for(var i=0 ; i<data.length;i++){
    //           //==> populating outgoingFlights array
    //           if(data[i].origin==origin && data[i].destination==destination && data[i].date==departingDate){
    //             if(Class=="economy"){
    //               if(data[i].capacity.economy<data[i].occupiedSeatsEconomy.length){ //if there is space
    //                 result.flightNumber=data[i].flightNumber;
    //                 result.aircraftType=data[i].aircraft.type;
    //                 result.aircraftModel=data[i].aircraft.model;
    //                 result.departureDateTime=data[i].date;
    //                 result.arrivalDateTime=data[i].date+data[i].duration;
    //                 result.origin=data[i].origin;
    //                 result.destination=data[i].destination;
    //                 result.cost=data[i].price.economy;
    //                 result.currency=data[i].price.currency;
    //                 result.class="economy";
    //                 result.Airline=data[i].Airline;
    //                 outgoingFlightsArr[j]=result;
    //                 j++;
    //                 result={};
    //               }
    //             }
    //               else if(Class=="business"){
    //                 if(data[i].capacity.business<data[i].occupiedSeatsBusiness.length){ //if there is space
    //                   result.flightNumber=data[i].flightNumber;
    //                   result.aircraftType=data[i].aircraft.type;
    //                   result.aircraftModel=data[i].aircraft.model;
    //                   result.departureDateTime=data[i].date;
    //                   result.arrivalDateTime=data[i].date+data[i].duration;
    //                   result.origin=data[i].origin;
    //                   result.destination=data[i].destination;
    //                   result.cost=data[i].price.business;
    //                   result.currency=data[i].price.currency;
    //                   result.class="business";
    //                   result.Airline=data[i].Airline;
    //                   outgoingFlightsArr[j]=result;
    //                   j++;
    //                   result={};
    //                 }
    //             }
    //         }
    //         //==> populating returningFlights array
    //         if(data[i].origin==destination && data[i].destination==origin && data[i].date==returningDate){
    //           //if it's economy class
    //           if(Class=="economy"){
    //             if(data[i].capacity.economy<data[i].occupiedSeatsEconomy.length){ // checks if there is room
    //               result.flightNumber=data[i].flightNumber;
    //               result.aircraftType=data[i].aircraft.type;
    //               result.aircraftModel=data[i].aircraft.model;
    //               result.departureDateTime=data[i].date;
    //               result.arrivalDateTime=data[i].date+data[i].duration;
    //               result.origin=data[i].origin;
    //               result.destination=data[i].destination;
    //               result.cost=data[i].price.economy;
    //               result.currency=data[i].price.currency;
    //               result.class="economy";
    //               result.Airline=data[i].Airline;
    //               returningFlightsArr[k]=result;
    //               k++;
    //               result={};
    //             }
    //           }
    //             //if it's business class
    //             else if(Class=="business"){
    //               if(data[i].capacity.business<data[i].occupiedSeatsBusiness.length){ //if there is room
    //                 result.flightNumber=data[i].flightNumber;
    //                 result.aircraftType=data[i].aircraft.type;
    //                 result.aircraftModel=data[i].aircraft.model;
    //                 result.departureDateTime=data[i].date;
    //                 result.arrivalDateTime=data[i].date+data[i].duration;
    //                 result.origin=data[i].origin;
    //                 result.destination=data[i].destination;
    //                 result.cost=data[i].price.business;
    //                 result.currency=data[i].price.currency;
    //                 result.class="business";
    //                 result.Airline=data[i].Airline;
    //                 returningFlightsArr[k]=result;
    //                 k++;
    //                 result={};
    //               }
    //           }
    //         }
    //       }
    //         res.json({
    //         "outgoingFlights":outgoingFlightsArr,
    //         "returnFlights":returningFlightsArr}
    //       );
    //     });
    //   });
    /**
     * ONE-WAY SEARCH REST ENDPOINT
     * @param origin - Flight Origin Location - Airport Code
     * @param DepartingDate - JavaScript Date.GetTime() numerical value corresponding to format `YYYY-MM-DD`
     * @param class - economy or business only
     * @returns {Array}
     */
    //        app.get('/api/flights/search/:origin/:destination/:departingDate/:class', function(req, res) {
    //          var origin=req.params.origin;
    //          var departingDate=req.params.departingDate;
    //          var Class = req.params.class;
    //          var destination=req.params.destination;
    //          var result={};
    //          var outgoingFlightsArr=[];
    //          db.getFlights(function(err,data){
    //            if(err) throw err;
    //            var j=0;
    //            for(var i=0 ; i<data.length;i++){
    //              //populating outgoingFlights array
    //              if(data[i].origin==origin && data[i].destination==destination && data[i].date==departingDate){
    //                if(Class=="economy"){
    //                  if(data[i].capacity.economy<data[i].occupiedSeatsEconomy.length){ //if there is space
    //                    result.flightNumber=data[i].flightNumber;
    //                    result.aircraftType=data[i].aircraft.type;
    //                    result.aircraftModel=data[i].aircraft.model;
    //                    result.departureDateTime=data[i].date;
    //                    result.arrivalDateTime=data[i].date+data[i].duration;
    //                    result.origin=data[i].origin;
    //                    result.cost=data[i].price.economy;
    //                    result.currency=data[i].price.currency;
    //                    result.Airline=data[i].Airline;
    //                    outgoingFlightsArr[j]=result;
    //                    j++;
    //                    result={};
    //                  }
    //                }
    //                  else if(Class=="business"){
    //                    if(data[i].capacity.business<data[i].occupiedSeatsBusiness.length){ //if there is space
    //                      result.flightNumber=data[i].flightNumber;
    //                      result.aircraftType=data[i].aircraft.type;
    //                      result.aircraftModel=data[i].aircraft.model;
    //                      result.departureDateTime=data[i].date;
    //                      result.arrivalDateTime=data[i].date+data[i].duration;
    //                      result.origin=data[i].origin;
    //                      result.cost=data[i].price.business;
    //                      result.currency=data[i].price.currency;
    //                      result.Airline=data[i].Airline;
    //                      outgoingFlightsArr[j]=result;
    //                      j++;
    //                      result={};
    //                    }
    //                }
    //              }
    //            }
    //        res.json({
    //        "outgoingFlights":outgoingFlightsArr});
    //      });
    // };
};
