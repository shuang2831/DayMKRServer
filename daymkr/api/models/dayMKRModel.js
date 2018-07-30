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
  update_date: {
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
  streak: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now
  },
  messages: [
    {
      message: String,
      givenName: String,
      imagePath: String,
      Date: Date,
    }
  ],
  totalDaysMade: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model("Users", UserSchema);
