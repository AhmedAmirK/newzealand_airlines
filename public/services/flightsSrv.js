/**
 * Flights Service
 */
App.factory('FlightsSrv', function ($http) {
     return {
         getAirportCodes : function() {
           return $http.get('/api/data/codes');
         },
         getOutgoingFlights : function() {
           return $http.get('/api/data/Outflights');
         },
         getReturningFlights : function() {
           return $http.get('/api/data/RetFlights');
         },
         setSelectedOriginAirport: function(value) {
           this.selectedOriginAirport = value;
         },
         getSelectedOriginAirport: function() {
           return this.selectedOriginAirport;
         },
         setSelectedDestinationAirport: function(value) {
           this.selectedDestinationAirport = value;
         },
         getSelectedDestinationAirport: function() {
           return this.selectedDestinationAirport;
         },
         getSearchOut: function(){
          return this.SearchOut;
         },
         setSearchOut: function(boolean){
          this.SearchOut= boolean;
         },
         setDate1: function(value){
          this.date1 = value;
         },
         getDate1: function(){
          return this.date1;
         },
         setDate2: function(value){
          this.date2 = value;
         },
         getDate2: function(){
          return this.date2;
         },
         setFlight: function(value){
          this.FlightNo = value;
         },
         getFlight: function(){
          return this.FlightNo;
         },
         setSeat: function(value){
          this.Seat = value;
         },
         getSeat: function(){
          return this.Seat;
         },
         setClass: function(value){
          this.Class = value;
         },
         getClass: function(){
          return this.Class;
         }
     };
 });
