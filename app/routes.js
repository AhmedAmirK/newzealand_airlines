var db = require('../db.js');
var airports =  require('../public/data/airports.json');
var mongoose = require('mongoose');
/**
 * App routes:
 */
module.exports = function(app,mongo) {



    app.get('/db/seed', function(req, res) {

      db.importAirports(airports,function(err){
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

};
