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
            return $http.get('/api/flights/track/' + data);
        },
        findBooking: function(num) {
            return $http.get('/api/booking/find/' + num);
        },
        searchFlights: function() {
            var myQuery;
            if (this.round)
                myQuery = this.selectedOriginAirport + '/' + this.selectedDestinationAirport + '/' + this.date1 + '/' + this.date2+'/'+this.Class;
            else
                myQuery = this.selectedOriginAirport + '/' + this.selectedDestinationAirport + '/' + this.date1+'/'+this.Class;
            return $http.get('/api/local/flights/search/1/' + myQuery);
        },
        searchOtherFlights: function() {
            if (this.round)
                return $http.get('/api/otherAirlines/twoWay/' + this.setSelectedOriginAirport + '/' + this.selectedDestinationAirport + '/' + this.date1 + '/' + this.date2 + '/'+this.Class);
            else return $http.get('/api/otherAirlines/oneWay/' + this.selectedOriginAirport + '/' + this.selectedDestinationAirport + '/' + this.date1 + '/'+this.Class);

        },
        getCurrentBookingRefNum: function() {
            return $http.get('/api/booking/currentrefnum');
        },
        setOtherAir: function(value) {
            this.Other = value;
        },
        getOtherAir: function() {
            return this.Other;
        },
         bookFlight: function(flightNumber, TotalPrice, seatClass, email, fname, lname, dateOfBirth, cardNumber, passportNumber, securityNumber, expMonth, expYear) {

            $http.get('/api/token').success(function(token) {

                if (this.Other) {
                    $http.get('/stripe/pubkey/' + this.FlightNo.Airline, {
                        "headers": { 'x-access-token': token.token }
                    }).success(function(pubkey) {

                        Stripe.setPublishableKey(pubkey);
                        Stripe.card.createToken({
                            number: cardNumber,
                            cvc: securityNumber,
                            exp_month: expMonth,
                            exp_year: expYear
                        }, function(status,response) {

                            $http.post('otherAirlines/booking/' + this.FlightNo.Airline, {
                                "wt": token.token,
                                passengerDetails: [{
                                    firstName: fname,
                                    lastName: lname,
                                    passportNum: passportNumber,
                                    passportExpiryDate: "" + expMonth + "/" + expYear,
                                    dateOfBirth: dateOfBirth,
                                    email: email
                                }],
                                class: seatClass,
                                cost: TotalPrice,
                                outgoingFlightId: this.FlightNo._id,
                                returnFlightId: this.retFlightNo._id,
                                paymentToken: response.id

                            });
                            Stripe.setPublishableKey(this.getStripeToken());
                        });
                    });
                } else {

                    Stripe.card.createToken({
                        number: cardNumber,
                            cvc: securityNumber,
                            exp_month: expMonth,
                            exp_year: expYear
                    },function(status,response){
                        $http.post('/booking',{
                             "wt": token.token,
                                passengerDetails: [{
                                    firstName: fname,
                                    lastName: lname,
                                    passportNum: passportNumber,
                                    passportExpiryDate: "" + expMonth + "/" + expYear,
                                    dateOfBirth: dateOfBirth,
                                    email: email
                                }],
                                class: seatClass,
                                cost: TotalPrice,
                                outgoingFlightId: this.FlightNo._id,
                                returnFlightId: this.retFlightNo._id,
                                paymentToken: response.id
                        });
                    });

                }

            });


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
