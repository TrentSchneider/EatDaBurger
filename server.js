const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
