"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: "Kindly enter the name of the User"
  },
  fbID: {
    type: String,
    required: "Please give a valid FB ID"
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"]
      }
    ],
    default: ["pending"]
  },
  messages: [
    {
      message: String,
      username: String,
      imageLocation: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = mongoose.model("Users", UserSchema);
