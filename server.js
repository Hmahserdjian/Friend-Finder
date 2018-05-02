var http = require("http");
var express = require("express")
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var question = [
    {
        routeQuestion: "Q1",
        name:
        Photo:
        Scores:
    },
    {
        routeQuestion: "Q2",
        name: 
        Photo:
        Scores:
    },
    {
        routeQuestion: "Q3",
        name: 
        Photo:
        Scores:
    },
    {
        routeQuestion: "Q4",
        name:
        Photo:
        Scores:
    },
    {
        routeQuestion: "Q5",
        name:
        Photo:
        Scores:
    },
    {
        routeQuestion: "Q6",
        name:
        Photo:
        Scores:
    },
    {
        routeQuestion: "Q7",
        name:
        Photo:
        Scores:
    },
    {
        routeQuestion: "Q8",
        name:
        Photo:
        Scores:
    },
    {
        routeQuestion: "Q9",
        name:
        Photo:
        Scores:
    },
    {
        routeQuestion: "Q10"
        name:
        Photo:
        Scores:
    }
];

app.get("/home.html", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.post(/data/survey, function () {
    var newFriend = req.body;


   friend.push(newFriend);

   res.json(newFriend);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
