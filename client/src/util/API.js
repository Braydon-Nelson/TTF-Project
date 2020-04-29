import axios from "axios";

export default {
    // Gets all transactions
    getTransactions: function (userid) {
        return transactions;

        // return axios.get("/api/transactions/" + userid);
    },
    // Gets the Transaction with the given id
    getTransaction: function (id) {
        return axios.get("/api/transactions/" + id);
    },
    // Deletes the Transaction with the given id
    deleteTransaction: function (id) {
        return axios.delete("/api/transactions/" + id);
    },
    // Saves a Transaction to the database
    saveTransaction: function (TransactionData) {
        return axios.post("/api/transactions", TransactionData);
    },

    transactions: function () {
        return
    }

};



export const transactions = [
    {
        name: "Rocky Mountain Power",
        date: "04-15-2020",
        amount: "18.36",
        type: "Expense",
        category: "Utilities",
        comments: "Electric March 2020"

    },

    {
        name: "Rent",
        date: "04-01-2020",
        amount: "1250.00",
        type: "Expense",
        category: "Rent/Mortgage",
        comments: "April 2020 Rent"

    },

    {
        name: "Paycheck",
        date: "04-15-2020",
        amount: "4,000.00",
        type: "Income",
        category: "Income",
        comments: "Bi-weekly Paycheck"

    },
    {
        name: "University of Utah",
        date: "04-27-2020",
        amount: "2000.00",
        type: "Expense",
        category: "Education",
        comments: "Spring Semester 2020"

    },
    {
        name: "Trader Joe's",
        date: "04-29-2020",
        amount: "34.59",
        type: "Expense",
        category: "Food/Groceries",
        comments: "Party Snacks"

    },

    {
        name: "Smith's Grocery",
        date: "04-29-2020",
        amount: "40.00",
        type: "Expense",
        category: "Food/Groceries",
        comments: "Gas for Salt Flats Road Trip"

    },

    {
        name: "Bed, Bath, and Beyond",
        date: "04-22-2020",
        amount: "67.89",
        type: "Expense",
        category: "Shopping/Retail",
        comments: "Wedding Gift"

    }


];
