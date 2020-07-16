const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const multer = require("multer");
const errorhandler = require("errorhandler");
const routes = require("./src/routes")

require("dotenv").config();
require("./database");

// Settings
app.set("port", process.env.PORT || 1802);
app.set("views", path.join(__dirname, "./src/views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    partialsDir: path.join(app.get("views"), "partials"),
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// Static files
app.use("/public", express.static(path.join(__dirname, "./src/public")));

// Middlewares
app.use(morgan("dev"));
app.use(
  multer({ dest: path.join(__dirname, "./src/public/upload/temp") }).single(
    "image"
  )
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(routes);

// Errorhandlers
if ("development" == app.get("env")) app.use(errorhandler);

app.listen(app.get("port"), () => {
  console.log("Server running.");
});
