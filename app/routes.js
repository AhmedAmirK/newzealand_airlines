/**
 * App routes:
 */
module.exports = function(app,mongo) {

    /* GET ALL STATES ENDPOINT */
    app.get('/api/data/codes', function(req, res) {
      var codes =  require('../airports.json');
      res.json( codes );
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
