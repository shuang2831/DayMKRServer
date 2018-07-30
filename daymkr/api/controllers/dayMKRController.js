"use strict";

var mongoose = require("mongoose"),
  User = mongoose.model("Users");

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err) res.send(err);
    console.log("User created!")
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.find_by_fb = function(req, res) {
  var update = { fbID: req.params.fbID },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };
  User.findOneAndUpdate({ fbID: req.params.fbID }, update, options, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.find_a_user = function(req, res) {
  var update = { _id: new mongoose.Types.ObjectId(req.params.userId) },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };
  User.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(req.params.userId) }, update, options, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create_a_message = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    function(err, user) {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

exports.update_user_streak = function(req, res) {
  User.findById( new mongoose.Types.ObjectId(req.params.userId),
    function(err, user) {
      if (err) res.send(err);
      console.log(user.update_date)
      console.log(user._id)
      var newStreak;
      if (user.update_date < (Date.now() - (24*60*60*1000))) {
        newStreak = 1;
      } else {
        newStreak = (user.streak + 1);
      }
      console.log(newStreak)
      var update = { streak: newStreak, update_date: Date.now() },
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
      User.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(req.params.userId) }, update, options, function(err, user) {
        if (err) res.send(err);
        res.json(user);
      });
    }
  );
};

exports.delete_a_user = function(req, res) {
  User.remove(
    {
      _id: req.params.userId
    },
    function(err, user) {
      if (err) res.send(err);
      res.json({ message: "User successfully deleted" });
    }
  );
};
