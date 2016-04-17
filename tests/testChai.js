var chai     = require('chai');
var chaiHttp = require('chai-http');
var app      = require('../app/app.js');
//var assert   = require('chai').assert;

chai.use(chaiHttp);

chai.request(app).get('/rubbishData').end(function (err,res) {
    chai.assert(err,null,'no error should be returned');
    chai.assert(res.status,404, 'should not find valid page');
});

chai.request(app).get('/db/seed').end(function(err,res){
    chai.assert(err,null,'no error should be returned');
    chai.assert(res.status,200);
});

chai.request(app).get('/db/delete').end(function(err,res){
    chai.assert(err,null,'no error should be returned');
    chai.assert(res.status,200);
});

chai.request(app).use('/anything').end(function (err,res) {
    chai.assert(err,null,'no error should be returned');
    chai.assert(res.status,200);
});

chai.request(app).get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class').end(function (err,res) {
    chai.assert(err,null,'no error should be returned');
    chai.assert(res.status,200);
    chai.assert.isTrue(
        res.body && Array.isArray(res.body[0]) && res.body[0].flightnumber && res.body[0].aircraftType && res.body[0].aircraftModel && res.body[0].departureDateTime
        && res.body[0].arrivalDateTime && res.body[0].origin && res.body[0].destination
        && res.body[0].cost && res.body[0].currency && res.body[0].class  && res.body[0].Airline && Array.isArray(res.body[1]) && res.body[1].flightnumber
        && res.body[1].aircraftType && res.body[1].aircraftModel && res.body[1].departureDateTime
        && res.body1[1].arrivalDateTime && res.body[1].origin && res.body[1].destination
        && res.body[1].cost && res.body[1].currency && res.body[1].class  && res.body[1].Airline, 'should return pair of JSON-object-arrays'
    );
});

chai.request(app).get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class').end(function (err,res) {
    chai.assert(err,null,'no error should be returned');
    chai.assert(res.status,200);
    chai.assert.isTrue(
        Array.isArray(res.body) && res.body[0].flightnumber && res.body[0].aircraftType && res.body[0].aircraftModel && res.body[0].departureDateTime
        && res.body[0].arrivalDateTime && res.body[0].origin && res.body[0].destination
        && res.body[0].cost && res.body[0].currency && res.body[0].class  && res.body[0].Airline, 'should return an array of JSON objects'
    );
});
