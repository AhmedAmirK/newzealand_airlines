var app     = require('./app/app');

app.listen(process.env.PORT, function(){
  console.log('listening on port '+ process.env.PORT);
});
