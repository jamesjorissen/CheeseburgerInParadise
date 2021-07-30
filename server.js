const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory and "models" in the application directory.
//Set up the server static html files that are going to be served
app.use(express.static("public"));
//Set up the responses format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log(`Application is now listening on port: ${PORT} open the app by clicking on: http://localhost:${PORT}`);
});
