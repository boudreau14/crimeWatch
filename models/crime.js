//Dependency
var orm = require("../config/orm.js");

//Burger module used by controller
var report = {
  all: function (cb) {
    orm.all("crimes_info", function (res) {
      cb(res);
    });
  },

  //NEEDS UPDATING - DEREK
  create: function (hood, date, police, type, notes, cb) {
    orm.create("crimes_reported", [
      "neighborhood", "date", "police_called", "type", "notes"
    ], [
      hood, date, police, type, notes
    ], cb);
  },

  search: function (hood, cb) {
    orm.search("crimes_info", hood, cb)
  }

};


//RANDOM CODE TO REFERENCE
// POST route for saving a new post
// app.post("/api/crimes_info", function (req, res) {
//   db.Post.create(["neighborhood", "date", "arrest", "type", "desc"], [req.body.neighborhood, req.body.date, req.body.arrest, req.body.type, req.body.desc]).then(function (dbPost) {
//     res.json(dbPost);
//   });
// });





//Exports burger
// module.exports = crime;
// module.exports = function (sequalize, DataTypes) {
//   var Report = sequalize.define("Report", {
//     neighborhood: DataTypes.TEXT,
//     date: DataTypes.STRING,
//     arrest: DataTypes.STRING,
//     type: DataTypes.TEXT,
//     desc: DataTypes.TEXT
//   })
module.exports = report;
  // return Report