var moment = require('moment');
var weirdDate = 'Sat Apr 30 2016 00:00:00 GMT+0200';

//console.log(moment(new Date(weirdDate)).format('YYYY-MM-DD'));
var curr=moment().toDate().getTime();
console.log(curr);
// var curr2=moment();
// console.log(curr2);
console.log(moment(new Date(curr)).format('YYYY-MM-DD')); //moment takes date not numbers
console.log(moment(new Date(curr)).format('YYYY-MM-DD HH:mm'));
curr=moment(curr).add(1,'day');
console.log(moment(new Date(curr)).format('YYYY-MM-DD HH:mm'));
console.log(moment(curr).toDate().getTime());
// console.log(moment(new Date(weirdDate)).toDate().getTime());
