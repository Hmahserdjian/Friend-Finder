var path = require("path");
var newFriends =require("../data/friends.js");

module.exports= function (app) {
    app.post("data/survey", function () {

        var newFriend = req.body;

        friend.push(newFriend);

        res.json(newFriend);
    });
    app.get("/api/friends", function (req, res) {
        return res.json(newFriends);
    });
};
