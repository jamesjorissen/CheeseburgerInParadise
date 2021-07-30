// Import MySQL connection.
var connection = require("./connection.js");


function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
/* ===================== HELPER FUNCTIONS ==================== */

var orm = {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function (err, result) {
    if (err) throw err;
    cb(result);
  });
},


  insertOne: function (table, cols, values, cb) {
    const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES(${printQuestionMarks(values.length)});`;
console.log("Form submited", queryString);
connection.query(queryString, values, function (err, result) {
  if (err) {
    throw err;
  }

  cb(result);
});
  },

updateOne: function (table, objColVals, condition, cb) {
  const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`;
  console.log("Update clicked", queryString);
  connection.query(queryString, function (err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
}
}


module.exports = orm;