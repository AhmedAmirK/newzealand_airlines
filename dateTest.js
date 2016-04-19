var moment = require('moment');
var weirdDate = 'Sat Apr 30 2016 00:00:00 GMT+0200';

//console.log(moment(new Date(weirdDate)).format('YYYY-MM-DD'));

console.log(moment(new Date(weirdDate)).toDate().getTime());
