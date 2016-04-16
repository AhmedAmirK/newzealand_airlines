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

        db.importFlights(flights,function(err){
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

    app.get('/api/flights/track/:flightNumber' , function(req,res){
        var num = req.param(flightNumber);
        var condition = new Object();
        condition["flightNumber"] = num;
        var jsonObject = JSON.stringify(condition);
        db.searchInFlights(jsonObject , function(err,results){
        if(err == null)
            res.json(results[0]);
        else
            console.log(err);
        });
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
   
    app.get('/api/flights/search/:origin/:departingDate/:class', function(req, res) {
        var Origin = req.param(origin);
        var dDate = req.param(departingDate);
        var DepartingDate = dDate.getTime();
        var Class = req.param(class);
        var Results = new Object();
        Results["origin"] = Origin;
        Results["departureDateTime"] = DepartingDate;
        Results["class"] = Class;
        var jsonArray = JSON.stringify(Results);
        db.searchInFlights(jsonArray, function(err,results){
            if(err == null)
                res.json(results.toString());
            else
                console.log(err);
        });
    }); 


};
