const db = require("../models");

// Defining methods for the bookController
module.exports = {
    findAll: function (req, res) {
        db.User.find(req.query)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(400).json(err));
    },
    create: function (req, res) {
        db.User.create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(400).json(err));
    },
    findOne: function (req, res) {
        db.User.findOne({ email: req.body.email })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(400).json(err));
    },
    remove: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(400).json(err));
    }
};
