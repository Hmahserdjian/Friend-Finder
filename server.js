var http = require("http");
var express = require("express")
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var question = [
    {
        routeQuestion: "Do you like cheese?"
    },
    {
        routeQuestion: "Do you like puppies?"
    },
    {
        routeQuestion: "Do you like coding?"
    },
    {
        routeQuestion: "Do you like movies?"
    },
    {
        routeQuestion: "Do you like facesuckers from aliens?"
    },
    {
        routeQuestion: "Is Thanos the greatest hero of all time?"
    },
    {
        routeQuestion: "Do you like Call of Duty?"
    },
    {
        routeQuestion: "Do you like Samsung?"
    },
    {
        routeQuestion: "Do you like the less superior apple?"
    },
    {
        routeQuestion: ""
    }
];

app.get("/home.html", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
