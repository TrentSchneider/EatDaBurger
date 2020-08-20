const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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
