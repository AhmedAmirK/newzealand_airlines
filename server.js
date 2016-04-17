var app     = require('./app/app');
var db = require('./db.js');

db.connect(function (err, db) {
    if (err) throw err;
app.listen(process.env.PORT, function(){
  console.log('listening on port '+ process.env.PORT);
});
});
