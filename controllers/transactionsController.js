const db = require("../models");

// Defining methods for the bookController
module.exports = {
    findAll: function (req, res) {
        db.Transactions.find(req.query)
            .then(dbTransactions => res.json(dbTransactions))
            .catch(err => res.status(400).json(err));
    },
    create: function (req, res) {
        db.Transactions.create(req.body)
            .then(dbTransactions => res.json(dbTransactions))
            .catch(err => res.status(400).json(err));
    },
    update: function (req, res) {
        db.Transactions.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbTransactions => res.json(dbTransactions))
            .catch(err => res.status(400).json(err));
    },
    remove: function (req, res) {
        db.Transactions.findById(req.params.id)
            .then(dbTransactions => dbTransactions.remove())
            .then(dbTransactions => res.json(dbTransactions))
            .catch(err => res.status(400).json(err));
    }
};
