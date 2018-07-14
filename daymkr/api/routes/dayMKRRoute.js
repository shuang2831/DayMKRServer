"use strict";
module.exports = function(app) {
  var dayMKR = require("../controllers/dayMKRController");

  // todoList Routes
  app
    .route("/users")
    .get(dayMKR.list_all_users)
    .post(dayMKR.create_a_user);

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
