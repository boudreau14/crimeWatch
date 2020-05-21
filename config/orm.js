//ORM takes inputs and conditions and turns into mySQL commands

//Connection dependency
var connection = require("./connection.js");

//Prints ?'s based on input
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//Turns an object into sql syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {

};

module.exports = orm;
