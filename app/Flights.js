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
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "BOM",
            destination: "DEL" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "CAI",
            destination: "JED" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "HKG",
            destination: "TPE" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "JNB",
            destination: "CPT" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "RUH",
            destination: "JED" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "LHR",
            destination: "JFK" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "LCF",
            destination: "LAX" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "LAX",
            destination: "SFO" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "FRA",
            destination: "TXL" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "LIN",
            destination: "FCO" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "DEL",
            destination: "BOM" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "JED",
            destination: "CAI" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        };
        i++;
        Flights.push(Flight);
         now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "TPE",
            destination: "HKG" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "CPT",
            destination: "JNB" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "JED",
            destination: "RUH" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        };
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "JFK",
            destination: "LHR" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LAX",
            destination: "LCF" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;
        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "SFO",
            destination: "LAX" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;

        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),

            origin: "TXL",
            destination: "FRA" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;
        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;
        Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(now).format('YYYY-MM-DD'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "FCP",
            destination: "LIN" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"}
        }
        i++;

        Flights.push(Flight);
        now = now + 120*60000;
        arrive= arrive+120*60000;
       }


module.exports = Flights;
