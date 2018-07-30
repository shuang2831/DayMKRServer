"use strict";
module.exports = function(app) {
  var daily = require("../controllers/dailyController");

  // todoList Routes
  app
    .route("/daily/:userId")
    .get(daily.update_user_daily)
    .post(daily.create_a_user);

  app
    .route("/users/:userId")
    .get(dayMKR.find_by_fb)
    .put(dayMKR.update_a_user)
    .delete(dayMKR.delete_a_user);

  app
    .route("/getUser/:userID")
    .get(dayMKR.list_all_users)
    .post(dayMKR.create_a_user);
};
