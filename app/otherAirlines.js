var request = require("request");
var jwt = require('jsonwebtoken');
require('dotenv').load();

var jwtSecret = process.env.JWTSECRET;

var origin,destination,departingDate,returningDate,Class , uri;
//Must use setters first before calling function
exports.setOrigin=function(val){
  origin=val;
}
exports.setDestination=function(val){
  destination=val;
}
exports.setDepartingDate=function(val){
  destination=val;
}
exports.setReturningDate=function(val){
  returningDate=val;
}
exports.setClass=function(val){
  Class=val;
}
exports.setUri=function(val){
  uri=val;
}

var urlTwoWay = 'http://'+'52.90.41.197'+'/'+'api/flights/search/'+origin+'/'+destination+'/'+departingDate+'/'+returningDate+'/'+Class; //austrin airlines
var urlOneWay='http://'+uri+'/'+'api/flights/search/'+origin+'/'+destination+'/'+departingDate+'/'+Class;
var token = jwt.sign('payload', jwtSecret,  { algorithm: 'HS256' });
///api/flights/search/:origin/:destination/:departingDate/:returningDate/:class'
exports.OneWayFlight=function(){request({
    url: urlOneWay,
    json: true,
    headers: {
       'x-access-token': token
     }
}, function (error, response, body) {
    if(error) console.log(error);
    // if (!error && response.statusCode === 200) {
    else    console.log(body) // Print the json response
    // }
    // cb();
});
}
exports.TwoWayFlight= function()
{request({
    url: urlOneWay,
    json: true,
    headers: {
       'x-access-token': token
     }
}, function (error, response, body) {
  if(error) console.log(error);

  // if(error) throw error;
    // if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    // }
    // cb();
});
}
