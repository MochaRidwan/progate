const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kosmetik",
});

connection.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("success coy");
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM produk", (error, results) => {
    console.log(results);
    res.render("hello.ejs", { item: results[0] });
  });
});

app.listen(3000, () => console.log('server running on port 3000!'));
