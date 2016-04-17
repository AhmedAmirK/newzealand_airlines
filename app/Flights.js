var moment = require('moment');



       var Flights = [];
       var now = moment();
       var arrive = moment(now).add(2,'hours');
       var date = moment("2016-05-30 24:00:00.000");
       now = now.toDate().getTime();
       arrive = arrive.toDate().getTime();
       date = date.toDate().getTime();
       var i = 0;
       while(now<date){
        
        var Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "BOM",
            destination: "DEL" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "CAI",
            destination: "JED" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "HKG",
            destination: "TPE" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "JNB",
            destination: "CPT" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "RUH",
            destination: "JED" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LHR",
            destination: "JFK" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LCF",
            destination: "LAX" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LAX",
            destination: "SFO" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "FRA",
            destination: "TXL" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "MXP",
            destination: "FCO" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "DEL",
            destination: "BOM" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "JED",
            destination: "CAI" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        };
        i++;
        Flights.push(Flight);
         now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "TPE",
            destination: "HKG" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "CPT",
            destination: "JNB" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "JED",
            destination: "RUH" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        };
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
             departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "JFK",
            destination: "LHR" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LAX",
            destination: "LCF" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;
        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "SFO",
            destination: "LAX" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "TXL",
            destination: "FRA" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;
        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: moment(now).format('YYYY-MM-DD hh:mm A'),
            arrivaldatetime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "FCP",
            destination: "MXP" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;

        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;
       }


module.exports = Flights;
