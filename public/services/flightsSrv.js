/**
 * Flights Service
 */

App.factory('FlightsSrv', function($http) {
    return {
        getAirportCodes: function() {
            return $http.get('/api/data/codes');
        },
        seedDB: function() {
            return $http.get('/db/seed');
        },
        trackFlight: function(data) {
            return $http.get('/api/flights/track/'+data);
        },
        searchFlights: function() {
            var myQuery; 
            if (this.round)
                myQuery = this.selectedOriginAirport + '/' + this.selectedDestinationAirport + '/' + this.date1 + '/' + this.date2;
            else
                myQuery = this.selectedOriginAirport + '/' + this.selectedDestinationAirport + '/' + this.date1;        
            return $http.get('/api/local/flights/search/' + myQuery);   
        },
        searchOtherFlights: function(){
            var myQuery; 
            $http.get('/api/token').success(function(tokenObject){
                var token = tokenObject.token;
                if(this.round)
                return $http.get('/api/otherAirlines/twoWay/'+this.setSelectedOriginAirport+'/'+this.selectedDestinationAirport+'/'+this.date1+'/'+this.date2+'/'+this.Class);
                else return $http.get('/api/otherAirlines/oneWay/'+this.selectedOriginAirport+'/'+this.selectedDestinationAirport+'/'+this.date1+'/'+this.Class);
            });
        },
        setOtherAir:function(value){
            this.Other =value; 
        },
        getOtherAir:function(){
            return this.Other;
        },
        bookFlight: function(flightNumber, email, TotalPrice,c) {
            var myQuery = email+'/'+this.date1+'/'+TotalPrice+'/'+flightNumber+'/'+c+'/'+this.Seat;
            $http.get('/api/booking/'+myQuery);
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
        getSearchOut: function() {
            return this.SearchOut;
        },
        setSearchOut: function(boolean) {
            this.SearchOut = boolean;
        },
        setDate1: function(value) {
            this.date1 = value;
        },
        getDate1: function() {
            return this.date1;
        },
        setDate2: function(value) {
            this.date2 = value;
        },
        getDate2: function() {
            return this.date2;
        },
        setOutFlight: function(value) {
            this.FlightNo = value;
        },
        getOutFlight: function() {
            return this.FlightNo;
        },
        setRetFlight: function(value) {
            this.retFlightNo = value;
        },
        getRetFlight: function(value) {
            return this.retFlightNo;
        },
        setSeat: function(value) {
            this.Seat = value;
        },
        getSeat: function() {
            return this.Seat;
        },
        setOutClass: function(value) {
            this.Class = value;
        },
        getOutClass: function() {
            return this.Class;
        },
        setRetClass: function(value) {
            this.Rclass = value;
        },
        getRetClass: function() {
            return this.Rclass;
        },
        setIfRoundTrip: function(value) {
            this.round = value;
        },
        getIfRoundTrip: function() {
            return this.round;
        }
    };
});
