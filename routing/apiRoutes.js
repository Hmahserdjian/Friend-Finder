var path = require("path");
var newFriends =require("../app/data/friends.js");

module.export= function (app) {
    app.post("data/survey", function () {

        var newFriend = req.body;

        friend.push(newFriend);

        res.json(newFriend);
    });
    app.get("./api/friends", function (req, res) {
        return res.json(reservations);
    });
};
