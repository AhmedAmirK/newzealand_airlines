var moment = require('moment');



       var Flights = [];
       var now = moment();
       var arrive = moment(now).add(2,'hours');
       var date = moment("2016-05-30 24:00:00.000");
       now = now.toDate().getTime();
       arrive = arrive.toDate().getTime();
       date = date.toDate().getTime();
       var i = 0;
       var curr = now;
      //  while(now<date){
      while(curr<=date){
        var Flight= {

            flightNumber: 300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "BOM",
            destination: "DEL" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 400+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "CAI",
            destination: "JED" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 500+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "HKG",
            destination: "TPE" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 600+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "JNB",
            destination: "CPT" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 700+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "RUH",
            destination: "JED" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 800+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LHR",
            destination: "JFK" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 900+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LCF",
            destination: "LAX" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 200+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LAX",
            destination: "SFO" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 100+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "FRA",
            destination: "TXL" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 000+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LIN",
            destination: "FCO" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1000+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "DEL",
            destination: "BOM" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1100+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "JED",
            destination: "CAI" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1200+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "TPE",
            destination: "HKG" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1300+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "CPT",
            destination: "JNB" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1400+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "JED",
            destination: "RUH" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1500+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "JFK",
            destination: "LHR" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1600+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "LAX",
            destination: "LCF" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1700+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "SFO",
            destination: "LAX" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1800+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "TXL",
            destination: "FRA" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }

      curr = now;
      arrive=moment(curr).add(2,'hours');
      i=0;
      while(curr<=date){
        var Flight= {

            flightNumber: 1900+i,
            aircraft: "Airbus 318",
            departureDateTime: moment(curr).format('YYYY-MM-DD hh:mm A'),
            arrivalDateTime: moment(arrive).format('YYYY-MM-DD hh:mm A'),
            origin: "FCO",
            destination: "LIN" ,
            occupiedSeatsBusiness : [],
            occupiedSeatsEconomy: [],
            price:{business: 100 , economy: 50 , currency:"USD"},
            capacity:{business:100 , economy:100}
        }
        Flights.push(Flight);
        i++;
        curr=moment(curr).add(1,'day');
        arrive=moment(curr).add(2,'hours');
      }


module.exports = Flights;
