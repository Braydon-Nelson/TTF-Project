const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../pages/Landing"));
    });
    // Sign in page route
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../pages/Home"));
    });
    // Sign up page route
    app.get("/account", function (req, res) {
        res.sendFile(path.join(__dirname, "../pages/Account"));
    });

    app.get("/addTransaction", function (req, res) {
        res.sendFile(path.join(__dirname, "./AddTransaction"));
    });
};