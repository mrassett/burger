var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Wilson4097",
  database: "todo_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error" + err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
