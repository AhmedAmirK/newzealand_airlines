var db = require('../db.js');
var airports =  require('../public/data/airports.json');
var aircrafts = require('../public/data/aircrafts.json');
var mongoose = require('mongoose');
/**
 * App routes:
 */
module.exports = function(app,mongo) {



    app.get('/db/seed', function(req, res) {

      db.importAirports(airports,function(err){
        if (err) console.log(err);
      });

       db.importAircrafts(aircrafts,function(err){
        if (err) console.log(err);
      });



    });

    /* DELETE DB */
    app.get('/db/delete', function(req, res) {

      db.clearFlights(
        db.clearBookings(
          db.clearAirports(
            db.clearAircrafts(function(){});
            )
          )
        )


    });



    app.get('/api/data/codes', function(req, res) {

      res.json( airports );
    });


    /* RENDER MAIN PAGE */
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/public/index.html');
    });



    app.get('/api/data/Outflights',function(req,res){
     	var Outflights = require('../public/Dummydata/OutGoingFlights.json');
        res.json(Outflights);
    });


    app.get('/api/data/Retflights',function(req,res){
    	var Retflights = require('../public/Dummydata/ReturningFlights.json');
    	res.json(Retflights);
    });

    /* Middleware */
  app.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
        var token = req.body.wt || req.query.wt || req.headers['x-access-token'];

        console.log("{{{{ TOKEN }}}} => ", token);

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
          console.error('[ERROR]: JWT Error reason:', err);
          res.status(403).sendFile(path.join(__dirname, '../public/assets', '403.jpg'));
        }

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
  app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class', function(req, res) {
        // retrieve params from req.params.{{origin | departingDate | ...}}
        var origin=req.params.origin;
        var destination=req.params.destination;
        var departingDate=req.params.departingDate;
        var returningDate= req.params.returningDate;
        var Class = req.params.class;
        var res={};
        var outgoingFlightsArr=[];
        var returningFlightsArr=[];
        db.getFlights(function(err,data){
          if(err) throw err;
          int j=0;
          int k=0;
          for(int i=0 ; i<data.length;i++){
            //populating outgoingFlights array
            if(data[i].origin==origin && data[i].destination==destination && data[i].date==departingDate){
              if(Class=="economy"){
                if(data[i].capacity.economy<data[i].occupiedSeatsEconomy.length){ //if there is space
                  res.flightNumber=data[i].flightNumber;
                  res.aircraftType=data[i].aircraft.type;
                  res.aircraftModel=data[i].aircraft.model;
                  res.departureDateTime=data[i].date;
                  res.arrivalDateTime=data[i].date+data[i].duration;
                  res.origin=data[i].origin;
                  res.cost=data[i].price.economy;
                  res.currency=data[i].price.currency;
                  res.Airline="AirNewZealand";
                  outgoingFlightsArr[j]=res;
                  j++;
                  res={};
                }
                else if(Class=="business"){
                  if(data[i].capacity.business<data[i].occupiedSeatsBusiness.length){ //if there is space
                    res.flightNumber=data[i].flightNumber;
                    res.aircraftType=data[i].aircraft.type;
                    res.aircraftModel=data[i].aircraft.model;
                    res.departureDateTime=data[i].date;
                    res.arrivalDateTime=data[i].date+data[i].duration;
                    res.origin=data[i].origin;
                    res.cost=data[i].price.business;
                    res.currency=data[i].price.currency;
                    res.Airline="AirNewZealand";
                    outgoingFlightsArr[j]=res;
                    j++;
                    res={};
                  }
              }
            }
          }
          //populating returningFlights array
          if(data[i].origin==destination && data[i].destination==origin && data[i].date==returningDate){
            if(Class=="economy"){
              if(data[i].capacity.economy<data[i].occupiedSeatsEconomy.length){ //if there is space
                res.flightNumber=data[i].flightNumber;
                res.aircraftType=data[i].aircraft.type;
                res.aircraftModel=data[i].aircraft.model;
                res.departureDateTime=data[i].date;
                res.arrivalDateTime=data[i].date+data[i].duration;
                res.origin=data[i].origin;
                res.cost=data[i].price.economy;
                res.currency=data[i].price.currency;
                res.Airline="AirNewZealand";
                returningFlightsArr[k]=res;
                k++;
                res={};
              }
              else if(Class=="business"){
                if(data[i].capacity.business<data[i].occupiedSeatsBusiness.length){ //if there is space
                  res.flightNumber=data[i].flightNumber;
                  res.aircraftType=data[i].aircraft.type;
                  res.aircraftModel=data[i].aircraft.model;
                  res.departureDateTime=data[i].date;
                  res.arrivalDateTime=data[i].date+data[i].duration;
                  res.origin=data[i].origin;
                  res.cost=data[i].price.business;
                  res.currency=data[i].price.currency;
                  res.Airline="AirNewZealand";
                  returningFlightsArr[k]=res;
                  k++;
                  res={};
                }
            }
          }
        }
        }
        return {
          "outgoingFlights":outgoingFlightsArr,
          "returnFlights":returningFlightsArr
        };
      });
    });
    /**
        * ONE-WAY SEARCH REST ENDPOINT
        * @param origin - Flight Origin Location - Airport Code
        * @param DepartingDate - JavaScript Date.GetTime() numerical value corresponding to format `YYYY-MM-DD`
        * @param class - economy or business only
        * @returns {Array}
        */
       app.get('/api/flights/search/:origin/:departingDate/:class', function(req, res) {
         var origin=req.params.origin;
         var departingDate=req.params.departingDate;
         var Class = req.params.class;
         var res={};
         var outgoingFlightsArr=[];
         var returningFlightsArr=[];
         db.getFlights(function(err,data){
           if(err) throw err;
           int j=0;
           for(int i=0 ; i<data.length;i++){
             //populating outgoingFlights array
             if(data[i].origin==origin && data[i].date==departingDate){
               if(Class=="economy"){
                 if(data[i].capacity.economy<data[i].occupiedSeatsEconomy.length){ //if there is space
                   res.flightNumber=data[i].flightNumber;
                   res.aircraftType=data[i].aircraft.type;
                   res.aircraftModel=data[i].aircraft.model;
                   res.departureDateTime=data[i].date;
                   res.arrivalDateTime=data[i].date+data[i].duration;
                   res.origin=data[i].origin;
                   res.cost=data[i].price.economy;
                   res.currency=data[i].price.currency;
                   res.Airline="AirNewZealand";
                   outgoingFlightsArr[j]=res;
                   j++;
                   res={};
                 }
                 else if(Class=="business"){
                   if(data[i].capacity.business<data[i].occupiedSeatsBusiness.length){ //if there is space
                     res.flightNumber=data[i].flightNumber;
                     res.aircraftType=data[i].aircraft.type;
                     res.aircraftModel=data[i].aircraft.model;
                     res.departureDateTime=data[i].date;
                     res.arrivalDateTime=data[i].date+data[i].duration;
                     res.origin=data[i].origin;
                     res.cost=data[i].price.business;
                     res.currency=data[i].price.currency;
                     res.Airline="AirNewZealand";
                     outgoingFlightsArr[j]=res;
                     j++;
                     res={};
                   }
               }
             }
           }
       });

};
