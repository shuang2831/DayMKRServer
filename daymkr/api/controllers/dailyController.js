"use strict";

var mongoose = require("mongoose"),
  Daily = mongoose.model("Daily"),
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
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

// Finds user via fbID
exports.find_user_daily = function(req, res) {
    var query = { _id: req.params.userId},
    update = { _id: new mongoose.Types.ObjectId(req.params.userId)},
    options = { upsert: true, new: true, setDefaultsOnInsert: true };
    // Find the document
    Daily.findOneAndUpdate(query, update, options, function(error, result) {
        if (error) return;
        res.json(result)
    // do something with the document
});
};

exports.create_a_message = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

// Updates the amount of days made daily for user
exports.update_user_daily = function(req, res) {
    var query = {_id: new mongoose.Types.ObjectId(req.params.userId)},
    global = {isGlobal: true},
    update = { $inc: {daysMade: 1} },
    options = { upsert: true, new: true, setDefaultsOnInsert: true, strict: false };
    console.log(req.body)
    Daily.findOneAndUpdate(global, update, options, function(error, result) {
        if (error) return;
        // res.json(result)
    // do something with the document
    });

    User.findOneAndUpdate(query,
        {$inc: {totalDaysMade: 1},
        $push: { messages: {
            message: req.body.message,
            givenName: req.body.givenName,
            imagePath: req.body.imagePath,
            Date: new Date(),
        }}
    }, options, function(error, result) {
        if (error) res.json(error);
        res.json(result)
    // do something with the document
    });

    Daily.findOneAndUpdate(query, update, options, function(error, result) {
        if (error) return;
       
    // do something with the document
    });
};

exports.aggregate_global = function(req, res) {
    User.aggregate().
        group({ _id: null, totalDaysMade: { $sum: '$totalDaysMade' } }).
        exec(function (err, result) {
            if (err) return handleError(err);
            //res.json(result)
            User.count({}, function( err, count){
                res.json({
                    ...result[0]',
                    count,
                });
            })
        });
}

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
