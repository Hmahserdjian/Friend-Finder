var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// app.get("/home.html", function (req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
// });

// app.post("/data/survey", function () {
//     var newFriend = req.body;


//    friend.push(newFriend);

//    res.json(newFriend);
// });
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});