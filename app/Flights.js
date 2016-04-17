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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
            departuredatetime: now,
            arrivaldatetime: arrive,
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
