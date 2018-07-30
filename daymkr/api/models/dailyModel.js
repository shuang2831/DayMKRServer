"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DailySchema = new Schema({
    expireAt: {
      type: Date,
      default: +new Date().setHours(0) + 24*60*60*1000,
    },
    fbID: {
      type: String,
      required: "Please give a user ID",
    },
    daysMade: {
      type: Number,
      default: 0
    },
    isGlobal: {
        type: Boolean,
        default: false,
    },
  })


module.exports = mongoose.model("Daily", DailySchema);