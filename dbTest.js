var db = require('./db.js');
var airports =  require('./public/data/airports.json');
var aircraft = {
    name     : 'My awesome aircraft',
    type     : 'Boeing',
    model    : 30,
    capacity : 100,
    seatmap  :
    {
        first : {windowMaximum:40 , aisleMaximum:40 , cabinMaximum:20},
        economy : {windowMaximum:40 , aisleMaximum:40 , cabinMaximum:20}
    }

    };
    var aircraft2 = {
        name     : 'My awesome test',
        type     : 'Boeing',
        model    : 30,
        capacity : 100,
        seatmap  :
        {
            first : {windowMaximum:40 , aisleMaximum:40 , cabinMaximum:20},
            economy : {windowMaximum:40 , aisleMaximum:40 , cabinMaximum:20}
        }
      };
db.connect(function(){

            db.clearFlights(function(){});
            db.insertInAircrafts(aircraft , function(err){
                if(err === null){
                    console.log('Successfully inserted');
                }
                else{
                    console.log(err);
                }
            });
            db.insertInAircrafts(aircraft2 , function(err){
                if(err === null){
                    console.log('Successfully inserted');
                }
                else{
                    console.log(err);
                }
            });


        db.getAircrafts(function(err,data){
            console.log(data.length);
            db.clearAircrafts(function(){});
        });

        db.importAirports(airports,function(err){
            if (err) console.log(err);
        });



});
