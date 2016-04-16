var moment = require('moment');



       var Flights = [];
       var now = moment();
       var arrive = moment(now).add(2,'hours');
       var date = moment("2016-05-30 24:00:00.000");
       var i = 0;
       while(now<date){
        
        var Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "BOM",
            destination: "DEL" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "CAI",
            destination: "JED" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "HKG",
            destination: "TPE" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "JNB",
            destination: "CPT" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "RUH",
            destination: "JED" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "LHR",
            destination: "JFK" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "LCF",
            destination: "LAX" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "LAX",
            destination: "SFO" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "FRA",
            destination: "TXL" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "MXP",
            destination: "FCO" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "DEL",
            destination: "BOM" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "JED",
            destination: "CAI" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        };
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "TPE",
            destination: "HKG" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "CPT",
            destination: "JNB" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "JED",
            destination: "RUH" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        };
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "JFK",
            destination: "LHR" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "LAX",
            destination: "LCF" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "SFO",
            destination: "LAX" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "TXL",
            destination: "FRA" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');
        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departuredatetime: now.toDate(),
            arrivaldatetime: arrive.toDate(),
            origin: "FCP",
            destination: "MXP" ,
            occupiedSeatsFirst : [],
            occupiedSeatsEconomy: [],
            price:{first: 100 , economy: 50 , currency:"USD"}
        }
        i++;

        Flights.push(Flight);
        now.add(2,'hours');
        arrive.add(2,'hours');
       }

       console.log(Flights);

module.exports = Flights;
