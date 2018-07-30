"use strict";
module.exports = function(app) {
  var dayMKR = require("../controllers/dayMKRController");

  // todoList Routes
  app
    .route("/users")
    .get(dayMKR.find_a_user)
    .post(dayMKR.create_a_user);

  app
    .route("/fbUsers/:fbID")
    .get(dayMKR.find_by_fb)
    .put(dayMKR.update_a_user)
    .delete(dayMKR.delete_a_user);

  app
    .route("/getUser/:userId")
    .get(dayMKR.find_a_user)
    .post(dayMKR.create_a_user);

  var daily = require("../controllers/dailyController");

  // todoList Routes
  app
    .route("/updateDaily/:userId")
    .post(daily.update_user_daily);

  app
    .route("/getDaily/:userId")
    .get(daily.find_user_daily);

  app
    .route("/incrementStreak/:userId")
    .get(dayMKR.update_user_streak);

  app
    .route("/global")
    .get(daily.aggregate_global);

};
