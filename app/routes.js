var db = require('../db.js');
var airports =  require('../public/data/airports.json');
var aircrafts = require('../public/data/aircrafts.json');
var mongoose = require('mongoose');
var flights = require('./Flights.js');
var jwt = require('jsonwebtoken');
/**
 * App routes:
 */
module.exports = function(app,bodyparser) {



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

      res.send('done');
       
    });      

    /* DELETE DB */
    app.get('/db/delete', function(req, res) {

      db.clearFlights( function(){
        db.clearBookings( function(){
          db.clearAirports(function(){
            db.clearAircrafts(function(){
              res.send('done');
            });
          });
          
        });
      });
      

    });

    app.get('/api/flights/track/:flightNumber' , function(req,res){
        var num = req.params.flightNumber;
        var condition = new Object();
        condition["flightNumber"] = num;
        var jsonObject = JSON.stringify(condition);
        db.searchInFlights(jsonObject , function(err,results){
        if(err == null && results.length>0)
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



    app.get('/api/data/flights',function(req,res){

      db.getFlights(function(err,data){
          res.json(data);
      });

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
        var Results = new Object();
        Results["origin"] = req.params.origin;
        Results["departureDateTime"] = (req.params.departingDate).toDate();
        //Results["class"] = req.params.class;
        var jsonArray = JSON.stringify(Results);
        db.searchInFlights(jsonArray, function(err,results){
            if(err == null)
                res.json({outgoingFlights:results});
            else
                console.log(err);
        });
    }); 

    app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class', function(req, res) {
        var conditions = new Object();
        conditions["origin"] = req.params.origin;
        conditions["destination"] = req.params.destination;
        conditions["departuredatetime"] = (req.params.departingDate).toDate();
        var jsonObject = JSON.stringify(conditions);
        db.searchInFlights(jsonObject, function(err,results){
            if(err == null){
              var conditions2 = new Object();
              conditions2["origin"] = req.params.destination;
              conditions2["destination"] = req.params.origin;
              conditions2["departuredatetime"] = (req.params.returnDate).getTime();
              var jsonObject2 = JSON.stringify(conditions2);
              db.searchInFlights(jsonObject2 , function(err2,results2){
                if(err2 == null)
                  res.json({outgoingFlights:results , returnFlights:results2});
              });  
            }
            else
                console.log(err);
        });
    });

    app.get('/api/booking/:email/:issueDate/:expiryDate/:TotalPrice/:flightNumber/:seatClass/:seatType' , function(req,res){
        var conditions = new Object();
        condition["email"] = req.param(email);
        condition["issueDate"] = req.param(issueDate);
        condition["expiryDate"] = req.param(expiryDate);
        condition["TotalPrice"] = req.param(TotalPrice);
        condition["flightNumber"] = req.param(flightNumber);
        condition["seatClass"] = req.param(seatClass);
        condition["seatType"] = req.param(seatType);
        var jsonObject = JSON.stringify(conditions);
        db.insertInBookings(jsonObject, function(err){
          if(err != null){
            console.log(err);
          }
        });
    });

};
