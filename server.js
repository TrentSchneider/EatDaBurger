const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const DB_PW = require("./db_pw");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// TODO swap out custom helper with if (checks truthy) and unless (checks falsy) see index.handlebars to swap out handlebars reference
// TODO Scott had issues inserting the if/unless into an each loop, so verify if that is possible
// TODO add the additional file plaths from the readme and distribute everthing to the designated directories

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: DB_PW,
  database: "burger_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
  connection.query("SELECT * FROM burger", function (err, data) {
    if (err) {
      return res.status(500).end();
    }
    console.log(data);
    res.render("index", { burger: data });
  });
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
