var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

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
  connection.query("SELECT * FROM burgers;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { plans: data });
  });
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
