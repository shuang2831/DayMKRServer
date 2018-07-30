var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  User = require("./api/models/dayMKRModel"), //created model loading here
  Daily = require("./api/models/dailyModel"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongodb://localhost/27017
// mongodb+srv://shuang2831:raddeeAtlus7!@daymkrcluster0-1sjio.gcp.mongodb.net/test?retryWrites=true
mongoose.connect("mongodb://localhost/27017");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/dayMKRRoute"); //importing route
routes(app); //register the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});
