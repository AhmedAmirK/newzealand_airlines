var assert  = require('chai').assert;
var app     = require('../../app/app.js');
var request = require('supertest');
var Quote   = require('../quotes.js');

describe('API', function() {
    request = request(app);
    it("should return a 404 for urls that don't exist", function(done) {
        request.get('/IDontActuallyExist').expect(404,done);
    });

    it("should remove any data in the db", function(done) {
        request.get('/db/delete').expect(200,done);
    });

    it("should seed the db correctly", function(done) {
        request.get('/db/seed').expect('Content-Type', /json/).expect(200, done);
    });

    it("should seed the db correctly", function(done) {
        request.use().expect(200, done);
    });

    it('should return a JSON object containing 2 arrays of JSON objects with the correct fields', function(done) {
        request.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class').expect('Content-Type', /json/).expect(200, function (err, res) {
        	if (res.body && Array.isArray(res.body[0]) && res.body[0].flightnumber && res.body[0].aircraftType && res.body[0].aircraftModel && res.body[0].departureDateTime
            && res.body[0].arrivalDateTime && res.body[0].origin && res.body[0].destination
            && res.body[0].cost && res.body[0].currency && res.body[0].class  && res.body[0].Airline && Array.isArray(res.body[1]) && res.body[1].flightnumber 
            && res.body[1].aircraftType && res.body[1].aircraftModel && res.body[1].departureDateTime
            && res.body1[1].arrivalDateTime && res.body[1].origin && res.body[1].destination
            && res.body[1].cost && res.body[1].currency && res.body[1].class  && res.body[1].Airline){
        		done();
            }
        });
    });

    it('should return an array of flight JSON objects with all the required fields', function(done) {
        request.get('/api/flights/search/:origin/:destination/:departingDate/:class').expect('Content-Type', /json/).expect(200, function (err, res) {
        	if (Array.isArray(res.body) && res.body[0].flightnumber && res.body[0].aircraftType && res.body[0].aircraftModel && res.body[0].departureDateTime
            && res.body[0].arrivalDateTime && res.body[0].origin && res.body[0].destination
            && res.body[0].cost && res.body[0].currency && res.body[0].class  && res.body[0].Airline){
        		done();
            }
        });
    });
});
