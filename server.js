const path = require("path");
const express = require("express");
const app = express();

// Serve static files
app.use(express.static(__dirname + "/dist/angular-agenda"));

// Send all requests to index.html
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/dist/angular-agenda/index.html"));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
