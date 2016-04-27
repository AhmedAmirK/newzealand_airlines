var db = require('../db.js');
var airports = require('../public/data/airports.json');
var aircrafts = require('../public/data/aircrafts.json');
var flights = require('./Flights.js');
var moment = require('moment');
var jwt = require('jsonwebtoken');
var request = require("request");
var array =require("../public/data/otherAirlinesURLS.json").serverIP;
const async = require('async');
require('dotenv').load();

var bookingRefNumber = 0 , seatNum = 0;

//App routes :

module.exports = function(app) {

  app.post('/booking', function (req, res) {

          var stripeToken = req.body.paymentToken;

          stripe.charges.create({
              amount: req.flight.price.amount,
              currency: req.flight.price.currency,
              source: "stripeToken",
              description: stripeToken.description //optional
          }, function (err, data) {
              if (err) {
                  res.send({ refNum: null, errorMessage: err});
              }
              else {
                  //create reservation in DB here
              }
          });

      });

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
        if(err == null)
            res.json(results);
        else
            console.log(err);

        });
    });

    app.get('/api/booking/find/:bookingRefNumber', function(req, res) {

        var num = parseInt(req.params.bookingRefNumber);

        db.searchInBookings({'bookingRefNumber':num} , function(err,results){
        if(err == null)
            res.json(results);
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


    app.get('/api/local/flights/search/:local/:origin/:destination/:departingDate/:class', handleOneWay);


    app.get('/api/local/flights/search/:local/:origin/:destination/:departingDate/:returningDate/:class' ,handleTwoWay);


    app.post('/api/booking/:email/:TotalPrice/:flightNumber/:seatClass/:seatType', function(req, res) {

        var email = req.params.email;
        console.log(email);
        var TotalPrice = req.params.TotalPrice;
        console.log(TotalPrice);
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
             // res.sendFile(__dirname + '/index.html');
             }
        });

    });

    // Two way to query other airlines
  app.get('/api/otherAirlines/twoWay/:origin/:destination/:departingDate/:returningDate/:class', function(req, res) {
    var origin=req.params.origin;
    var destination=req.params.destination;
    var departingDate=req.params.departingDate;
    departingDate = moment(departingDate).toDate().getTime();
    var returningDate= req.params.returningDate;
    returningDate = moment(returningDate).toDate().getTime();
    var Class = req.params.class;
    var jwtSecret = process.env.JWTSECRET;
    var uri;
    var urli;
    var token = jwt.sign('payload', jwtSecret,  { algorithm: 'HS256' });

    var queue = [];
    var filterArr=[];
    var response_count = 0;
    function addToQueue(callback) {
      return function(err, res, body) {
        response_count +=1
        if (!err||body!= undefined || body !=null) // website not down
          if(body.outgoingFlights != undefined ||body.returnFlights !=undefined) // returns correct data
          queue.push(body);

        if (array.length===response_count) {
            callback(queue);
        }
      }
    }

    array.forEach(function(entry){
          uri=entry;
      console.log(entry);
        urli='http://'+uri+'/'+'api/flights/search/'+origin+'/'+destination+'/'+departingDate+'/'+returningDate+'/'+Class;
      request({
          url: urli,
          json: true,
          timeout:6000,
          headers: {
             'x-access-token': token
           }
      }, addToQueue(function (q) {
        console.log(q);
        var j=0; //to filter out empty
        for(j=0;q.length>j;j++){
          if(q[j].outgoingFlights.length!=0 ){
          for(k=0;q[j].outgoingFlights.length>k;k++){
          q[j].outgoingFlights[k].departureDateTime= moment(new Date(q[j].outgoingFlights[k].departureDateTime)).format('YYYY-MM-DD hh:mm A');
          q[j].outgoingFlights[k].arrivalDateTime= moment(new Date(q[j].outgoingFlights[k].arrivalDateTime)).format('YYYY-MM-DD hh:mm A');
              }
          if(q[j].returnFlights.length!=0){
            for(k=0;q[j].returnFlights.length>k;k++){
            q[j].returnFlights[k].departureDateTime= moment(new Date(q[j].returnFlights[k].departureDateTime)).format('YYYY-MM-DD hh:mm A');
            q[j].returnFlights[k].arrivalDateTime= moment(new Date(q[j].returnFlights[k].arrivalDateTime)).format('YYYY-MM-DD hh:mm A');
                }
          }
          filterArr.push(q[j]);
        }
        }
        console.log(filterArr);
        res.send(filterArr);
        // console.log(q);
        // res.send(q);
      }));
    });

});

//One way
app.get('/api/otherAirlines/oneWay/:origin/:destination/:departingDate/:class', function(req, res) {
var origin=req.params.origin;
var destination=req.params.destination;
var departingDate=req.params.departingDate;
departingDate = moment(departingDate).toDate().getTime();
console.log(departingDate);
console.log(origin);
var Class = req.params.class;
var jwtSecret = process.env.JWTSECRET;
var uri;
var urli;
var token = jwt.sign('payload', jwtSecret,  { algorithm: 'HS256' });

var queue = [];
var filterArr=[];
var response_count = 0;
function addToQueue(callback) {
  return function(err, res, body) {
    response_count +=1
    if (!err||body!= undefined || body !=null){ // website not down
      if(body.outgoingFlights != undefined ||body.returnFlights !=undefined){ // returns correct data
        queue.push(body)
      }
    }
    if (array.length===response_count) {
      callback(queue);
    }
  }
}

array.forEach(function(entry){
  uri=entry;
  console.log(entry);
  urli='http://'+uri+'/'+'api/flights/search/'+origin+'/'+destination+'/'+departingDate+'/'+Class;
  request({
    url: urli,
    json: true,
    timeout:6000, //wait 6 seconds only for response
    headers: {
      'x-access-token': token
    }
  }, addToQueue(function (q) {
    var j=0; //to filter out empty data
    var k=0;
    for(j=0;q.length>j;j++){
      if(q[j].outgoingFlights.length!=0 ){
      for(k=0;q[j].outgoingFlights.length>k;k++){
      q[j].outgoingFlights[k].departureDateTime= moment(new Date(q[j].outgoingFlights[k].departureDateTime)).format('YYYY-MM-DD hh:mm A');
      q[j].outgoingFlights[k].arrivalDateTime= moment(new Date(q[j].outgoingFlights[k].arrivalDateTime)).format('YYYY-MM-DD hh:mm A');
      }
      filterArr.push(q[j]);
      }
    }
    // console.log(q);
    // console.log(q.length);
    // console.log(filterArr);
    // console.log(filterArr.length);
    res.send(filterArr);
  }));
});

  });

    //////TOKEN///////
    app.get('/api/token',function(request,response){
        var jwtSecret = process.env.JWTSECRET;
        var token = jwt.sign('payload', jwtSecret,  { algorithm: 'HS256' });
        response.json({token:token});
    });

    ////////////////////////////////////////////START OF MIDDELEWARE
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
      var depDate=(req.params.local ===undefined)? moment(new Date(parseInt(req.params.departingDate))).format('YYYY-MM-DD'): moment(req.params.departingDate).format('YYYY-MM-DD');// cuz date sent differently from local
      var next= moment(depDate).add(1,'day').format('YYYY-MM-DD');
      var Class = req.params.class;
      var seats = (req.params.seats===null||req.params.seats===undefined)? 1 :req.params.seats; //if seat not sent then make it 1
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
                result.departureDateTime=(req.params.local ===undefined)?moment(results[i].departureDateTime).toDate().getTime():results[i].departureDateTime;
                result.arrivalDateTime=(req.params.local ===undefined)?moment(results[i].arrivalDateTime).toDate().getTime():results[i].arrivalDateTime;
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
            console.log(outgoingFlightsArr);
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
       var depDate =(req.params.local ===undefined)?moment(new Date(parseInt(req.params.departingDate))).format('YYYY-MM-DD'):moment(req.params.departingDate).format('YYYY-MM-DD'); // cuz date sent differently from local
       var nextDep= moment(depDate).add(1,'day').format('YYYY-MM-DD');
       var retDate =(req.params.local ===undefined)?moment(new Date(parseInt(req.params.returningDate))).format('YYYY-MM-DD'):moment(req.params.returningDate).format('YYYY-MM-DD'); // cuz date sent differently from local
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
                 result.departureDateTime=(req.params.local ===undefined)?moment(results[i].departureDateTime).toDate().getTime():results[i].departureDateTime;
                 result.arrivalDateTime=(req.params.local ===undefined)?moment(results[i].arrivalDateTime).toDate().getTime():results[i].arrivalDateTime;
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
                     result.departureDateTime=(req.params.local ===undefined)?moment(results2[i].departureDateTime).toDate().getTime():results2[i].departureDateTime;
                     result.arrivalDateTime=(req.params.local ===undefined)?moment(results2[i].arrivalDateTime).toDate().getTime():results2[i].arrivalDateTime;
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
