require('babel-core/register');
var port = process.env.PORT || 3000;
var app = require('./server/app');
console.log(app.listen);
app.listen(port, function () {
  console.log('RoboWars app listening on port ' + port);
});
