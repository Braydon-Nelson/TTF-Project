const path = require("path");
const router = require("express").Router();
const transactionsRoute = require("./transactions");

// Books routes match /api/transactions
router.use("/transactions", transactionsRoute);

module.exports = router;
