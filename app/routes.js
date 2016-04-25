var db = require('../db.js');
var airports = require('../public/data/airports.json');
var aircrafts = require('../public/data/aircrafts.json');
var mongoose = require('mongoose');
var flights = require('./Flights.js');
var moment = require('moment');
var jwt = require('jsonwebtoken');
var request = require("request");
const async = require('async');
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

        res.send('Database Seeded');

    });

    /* DELETE DB */
    app.get('/db/delete', function(req, res) {

        db.clearFlights(function() {
            db.clearBookings(function() {
                db.clearAirports(function() {
                    db.clearAircrafts(function() {
                        res.send('Database Cleared');
                    });
                });

            });
        });

    });

    app.get('/api/flights/track/:flightNumber', function(req, res) {
        var num = parseInt(req.params.flightNumber);

        db.searchInFlights({'flightNumber':num} , function(err,results){
        if(err == null && results.length > 0)
            res.json(results[0]);
        else
            console.log(err);

        });
    });

    app.get('/api/booking/find/:bookingRefNumber', function(req, res) {

        var num = parseInt(req.params.bookingRefNumber);

        db.searchInBookings({'bookingRefNumber':num} , function(err,results){
        if(err == null && results.length > 0)
            res.json(results[0]);
        else
            console.log(err);
        });
    });

    app.get('/api/booking/currentrefnum',function(req,res){
      res.json({num : bookingRefNumber});
    });

    app.get('/api/data/codes', function(req, res) {
        res.json(airports);
    });

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
        var next= moment(depDate).add(1,'day').format('YYYY-MM-DD');

        var jsonObject = {
            'origin':origin ,
            'destination':destination,
            'departureDateTime':{ "$gte" :depDate, "$lt" : next}
        };

        console.log(jsonObject);

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
        var nextDep= moment(depDate).add(1,'day').format('YYYY-MM-DD');
        var nextOut= moment(retDate).add(1,'day').format('YYYY-MM-DD');

        var jsonObject = {
            'origin':origin,
            'destination':destination,
            'departureDateTime':{ "$gte" :depDate, "$lt" : nextDep}
        };

        var jsonObject2 = {
            'origin':destination,
            'destination':origin,
            'departureDateTime':{ "$gte" :retDate, "$lt" : nextOut}
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
                console.log(err2);
        });

    });

    app.post('/api/booking/:email/:TotalPrice/:flightNumber/:seatClass/:seatType', function(req, res) {

        var email = req.params.email;
        var TotalPrice = req.params.TotalPrice;
        var flightNumber = req.params.flightNumber;
        var seatClass = req.params.seatClass;
        var seatType = req.params.seatType;

        var jsonObject = {
          'email':email,
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
              console.log('BOOKINGS NUM : '+bookingRefNumber);
              // res.sendFile(__dirname + '/public/index.html');
            }
        });

    });

    // Two way to query other airlines
  app.get('/api/otherAirlines/twoWay/:origin/:destination/:departingDate/:returningDate/:class', function(req, response) {
    var origin=req.params.origin;
    var destination=req.params.destination;
    var departingDate=req.params.departingDate;
    var returningDate= req.params.returningDate;
    var Class = req.params.class;
    var jwtSecret = process.env.JWTSECRET;
    var uri;
    var urli;
    var token = jwt.sign('payload', jwtSecret,  { algorithm: 'HS256' });
    // array.forEach(function(entry){ //this needs to be synchronus but works
    //       uri=entry;
    //   console.log(entry);
    //   urli='http://'+uri+'/'+'api/flights/search/'+origin+'/'+destination+'/'+departingDate+'/'+returningDate+'/'+Class;
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
    // });

function httpGet(url, callback) {
    urli='http://'+uri+'/'+'api/flights/search/'+origin+'/'+destination+'/'+departingDate+'/'+returningDate+'/'+Class;
  const options = {
    url: urli,
    json: true,
    headers: {
       'x-access-token': token
     }
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}

async.map(array, httpGet, function (err, res){
  if (err) console.log("err");
  console.log(res);
  response.send(res);
});

});

app.get('/api/otherAirlines/oneWay/:origin/:destination/:departingDate/:class', function(req, res) {
var origin=req.params.origin;
var destination=req.params.destination;
var departingDate=req.params.departingDate;
var returningDate= req.params.returningDate;
var Class = req.params.class;
var jwtSecret = process.env.JWTSECRET;
var uri;
var urli;
var token = jwt.sign('payload', jwtSecret,  { algorithm: 'HS256' });
function httpGet(url, callback) {
    urli='http://'+uri+'/'+'api/flights/search/'+origin+'/'+destination+'/'+departingDate+'/'+Class;
  const options = {
    url: urli,
    json: true,
    headers: {
       'x-access-token': token
     }
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}

async.map(array, httpGet, function (err, res){
  if (err) console.log("err");
  console.log(res);
  response.send(res);
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
            res.status(403).send("Not Authorized to access!");
          }

    });
        ////////////////////////////////////// END OF MIDDLEWARE!!!
        //OneWay Flight
    function handleOneWay(req,res,next){
      var origin = req.params.origin;
      var destination = req.params.destination;
      var depDate = moment(new Date(parseInt(req.params.departingDate))).format('YYYY-MM-DD');
      var next= moment(depDate).add(1,'day').format('YYYY-MM-DD');
      var Class = req.params.class;
      var seats = (req.params.seats===null||req.params.seats===undefined)? 1 :req.params.seats; //if seat not sent then make it 1
      console.log(seats);
      var result={};
      var outgoingFlightsArr=[];
      var i=0; var j=0;
      var jsonObject = {
          'origin':origin ,
          'destination':destination,
          'departureDateTime':{ "$gte" :depDate, "$lt" : next}
      };
      db.searchInFlights(jsonObject, function(err,results){
          if(err == null){
            for(i=0;i<results.length;i++){
              if(Class=="economy"){
                if((results[i].capacity.economy-results[i].occupiedSeatsEconomy.length)-seats<0) continue; //if not enough seats skip this entry
              }
              else if(Class=="business"){
                if((results[i].capacity.economy-results[i].occupiedSeatsBusiness.length)-seats<0) continue; //if not enough seats skip this entry
              }
                result.flightId=results[i]._id;
                result.flightNumber=results[i].flightNumber;
                result.aircraftType=results[i].aircraft;
                result.aircraftModel=results[i].aircraft;
                result.departureDateTime=results[i].departureDateTime;
                result.arrivalDateTime=results[i].arrivalDateTime;
                result.origin=results[i].origin;
                result.destination=results[i].destination;
                if(Class=="economy"){
                result.cost=results[i].price.economy;}
                else if(Class="business"){
                result.cost=results[i].price.business;}
                result.currency=results[i].price.currency;
                result.class=Class;
                result.Airline="AirNewZealand"
                outgoingFlightsArr[j]=result;
                j++;
                result={};
            }
              res.json({"outgoingFlights":outgoingFlightsArr});
          }

          else
              console.log(err);
      });
    }
    app.get('/api/flights/search/:origin/:destination/:departingDate/:class',handleOneWay);
    app.get('/api/flights/search/:origin/:destination/:departingDate/:class/:seats', handleOneWay);

    // Two way flight
    function handleTwoWay(req, res) {
       var origin = req.params.origin;
       var destination = req.params.destination;
       var Class = req.params.class;
       var depDate = moment(new Date(parseInt(req.params.departingDate))).format('YYYY-MM-DD');
       var nextDep= moment(depDate).add(1,'day').format('YYYY-MM-DD');
       var retDate = moment(new Date(parseInt(req.params.returningDate))).format('YYYY-MM-DD');
       var nextOut= moment(retDate).add(1,'day').format('YYYY-MM-DD');
       var seats = (req.params.seats===null||req.params.seats===undefined)? 1 :req.params.seats;
       var result={};
       var outgoingFlightsArr=[];
       var returningFlightsArr=[];
       var i=0;var k=0; var j=0;
       var jsonObject = {
           'origin':origin,
           'destination':destination,
           'departureDateTime':{ "$gte" :depDate, "$lt" : nextDep}
       };

       var jsonObject2 = {
           'origin':destination,
           'destination':origin,
           'departureDateTime':{ "$gte" :retDate, "$lt" : nextOut}
       };

       db.searchInFlights(jsonObject , function(err,results){
           if(err == null){
             console.log(results);
             for(i=0;i<results.length;i++){
               if(Class=="economy"){
                 if((results[i].capacity.economy-results[i].occupiedSeatsEconomy.length)-seats<0) continue; //if not enough seats skip this entry
               }
               else if(Class=="business"){
                 if((results[i].capacity.economy-results[i].occupiedSeatsBusiness.length)-seats<0) continue; //if not enough seats skip this entry
               }
                 result.flightId=results[i]._id;
                 result.flightNumber=results[i].flightNumber;
                 result.aircraftType=results[i].aircraft;
                 result.aircraftModel=results[i].aircraft;
                 result.departureDateTime=results[i].departureDateTime;
                 result.arrivalDateTime=results[i].arrivalDateTime;
                 result.origin=results[i].origin;
                 result.destination=results[i].destination;
                 if(Class=="economy"){
                 result.cost=results[i].price.economy;}
                 else if(Class="business"){
                 result.cost=results[i].price.business;}
                 result.currency=results[i].price.currency;
                 result.class=Class;
                 result.Airline="AirNewZealand"
                 outgoingFlightsArr[j]=result;
                 j++;
                 result={};
             }
             db.searchInFlights(jsonObject2 , function(err2,results2){
               if(err2 == null){
                 console.log(results2);
                 for(i=0;i<results2.length;i++){
                   if(Class=="economy"){
                     if((results2[i].capacity.economy-results2[i].occupiedSeatsEconomy.length)-seats<0) continue; //if not enough seats skip this entry
                   }
                   else if(Class=="business"){
                     if((results2[i].capacity.economy-results2[i].occupiedSeatsBusiness.length)-seats<0) continue; //if not enough seats skip this entry
                   }
                     result.flightId=results2[i]._id;
                     result.flightNumber=results2[i].flightNumber;
                     result.aircraftType=results2[i].aircraft;
                     result.aircraftModel=results2[i].aircraft;
                     result.departureDateTime=results2[i].departureDateTime;
                     result.arrivalDateTime=results2[i].arrivalDateTime;
                     result.origin=results2[i].origin;
                     result.destination=results2[i].destination;
                     if(Class=="economy"){
                     result.cost=results2[i].price.economy;}
                     else if(Class="business"){
                     result.cost=results2[i].price.business;}
                     result.currency=results2[i].price.currency;
                     result.class=Class;
                     result.Airline="AirNewZealand";
                     returningFlightsArr[k]=result;
                     k++;
                     result={};
                 }
                   res.json({"outgoingFlights":outgoingFlightsArr , "returnFlights":returningFlightsArr});
               }
               else
                   console.log(err);
             });
           }
           else
               console.log(err2);
       });

   }
    // app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class',handleTwoWay);
    app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class/:seats',handleTwoWay);
};
