//Dependencies and router setup
var express = require("express");

var router = express.Router();

var path = require("path")
var report = require("../models/crime.js");

router.get("/", function(req, res) {
    res.redirect("/crimewatch");
  });

router.get("/crimewatch", function(req, res) {
  res.render("index");
})

router.get("/report", function(req, res) {
    res.render("contact");
  });

router.post("/crimewatch/create", function (req, res) {
  console.log(res)
  report.create(req.body.neighborhood, req.body.date, req.body.police_called, req.body.type, req.body.notes, function(result) {
    res.redirect("/report");
  });
});
  
  // router.get("/api/neighborhoods", function(req, res) {
  //   crime.all(function(hooddata) {
  //     var hbsObject = {
  //       neighborhood_data: hooddata
  //     };
  //     console.log(hbsObject);
  //     res.render("crime", hbsObject);
  //   });
  // });

  // app.get("/api/neighborhood", function (req, res) {
  //   db.Reminder.findAll({
  //     where: {
  //       neighborhood: {
  //         $gt: today
  //       }
  //     }
  //   }).then(function (dbReminder) {
  //     res.json(dbReminder);
  //   });
  // });
  
  // router.post("/api/re", function(req, res) {
  //   burger.create(req.body.burger_name, function(result) {
  //     // Send back the ID of the new quote
  //     console.log(result)
  //     res.redirect("/");
  //   });
  // });
  
  router.get("/api/crime_info/", function(req, res) {
    var hood = "neighborhood = " + req.params.neighborhood;

    console.log("neighborhood", hood);
  
    router.get(
      {
        neighborhood: req.body.neighborhood,
        hood_lat: req.body.hood_lat,
        hood_long: req.body.hood_long,
        crime_lat: req.body.crime_lat,
        crime_long: req.body.crime_long
      },
      // condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
    
  });

module.exports = router;
