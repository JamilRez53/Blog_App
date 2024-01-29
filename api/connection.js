const mysql = require("mysql2");

const connection = mysql.createConnection({
  port:3306,
  host: "localhost",
  user: "root",
  password: "root" ,
  database: "blog",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to Blog DBS");
  }
});

module.exports = connection;