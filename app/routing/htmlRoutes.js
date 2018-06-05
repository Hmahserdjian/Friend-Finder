var path = require("path");
module.exports=function (app) {
    


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
};


// var newFriends = require("../app/data/friends.js");

// module.export = function (app) {
//     app.post("data/survey", function () {

//         var newFriend = req.body;

//         friend.push(newFriend);

//         res.json(newFriend);
//     });
//     app.get("./api/friends", function (req, res) {
//         return res.json(reservations);
//     });
// };
