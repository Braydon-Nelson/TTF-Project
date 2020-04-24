const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: "Enter a name for transaction"
        },
        date: {
            type: String,
            required: "Enter a date"
        },
        amount: {
            type: Number,
            trim: true,
            required: "Enter an amount"
        },
        type: {
            type: String,
            required: "Enter transaction type"
        },
        category: {
            type: String,
            required: "Enter a category for the transaction"
        },
        comment: {
            type: String
        },
        userID: {
            type: String,
            trime: true
        }
    }
);

const Transactions = mongoose.model("Transactions", transactionSchema);

module.exports = Transactions;
